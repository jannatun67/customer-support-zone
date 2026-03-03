import './App.css'

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import ResolvedList from './components/ResolvedList';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // 🔥 Fast & Smooth Loader (800ms delay)
  const fetchTickets = async () => {
    try {
      setLoading(true);

      // Smooth short delay
      await new Promise(resolve => setTimeout(resolve, 800));

      const response = await fetch('/tickets.json');
      const data = await response.json();

      setTickets(data.tickets);

    } catch (error) {
      console.error('Error fetching tickets:', error);
      toast.error('Failed to load tickets. Please refresh the page.', {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  // ✅ Safe State Update
  const handleTicketSelect = (ticket) => {
    if (
      !taskStatus.find(t => t.id === ticket.id) &&
      !resolvedTickets.find(t => t.id === ticket.id)
    ) {
      setTaskStatus(prev => [...prev, ticket]);
      setInProgress(prev => prev + 1);
      setTickets(prev => prev.filter(t => t.id !== ticket.id));
    } else {
      toast.warning('This ticket is already in progress or resolved!', {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  const handleTaskComplete = (completedTicket) => {
    setTaskStatus(prev =>
      prev.filter(t => t.id !== completedTicket.id)
    );

    setResolvedTickets(prev => [...prev, completedTicket]);

    setInProgress(prev => prev - 1);
    setResolved(prev => prev + 1);
  };

  // ✅ Loader View
  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <Banner inProgress={inProgress} resolved={resolved} />

      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Side */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Customer Tickets
              </h2>
              <p className="text-gray-600">
                Select a ticket to start working on it
              </p>
            </div>

            {tickets.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  All Tickets Processed!
                </h3>

                <p className="text-gray-600 mb-6">
                  All customer tickets have been resolved or are in progress.
                </p>

                <button
                  onClick={fetchTickets}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Refresh Tickets
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tickets.map(ticket => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onSelect={handleTicketSelect}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="lg:w-1/3 space-y-8">

            {/* Task Status */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Task Status
                </h3>

                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                  {inProgress} Active
                </span>
              </div>

              <TaskStatus
                tasks={taskStatus}
                onComplete={handleTaskComplete}
              />
            </div>

            {/* Resolved */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Resolved
                </h3>

                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                  {resolved} Completed
                </span>
              </div>

              <ResolvedList resolved={resolvedTickets} />
            </div>

          </div>
        </div>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
    </div>
  );
}

export default App;