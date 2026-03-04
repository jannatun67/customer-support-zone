import './App.css';
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

  // ✅ Fetch Tickets
  const fetchTickets = async () => {
    try {
      setLoading(true);

      // smooth loader delay
      await new Promise(resolve => setTimeout(resolve, 600));

      const response = await fetch('/tickets.json');

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();

      // ✅ Safe fallback
      setTickets(data?.tickets || []);

      // 🔥 Reset everything on refresh
      setTaskStatus([]);
      setResolvedTickets([]);
      setInProgress(0);
      setResolved(0);

    } catch (error) {
      toast.error('Failed to load tickets!', {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  // ✅ Move Open → In Progress
  const handleTicketSelect = (ticket) => {

    const alreadyProcessing =
      taskStatus.find(t => t.id === ticket.id) ||
      resolvedTickets.find(t => t.id === ticket.id);

    if (alreadyProcessing) {
      toast.warning('Ticket already processing or resolved!', {
        autoClose: 2000,
      });
      return;
    }

    const updatedTicket = { ...ticket, status: "in-progress" };

    setTaskStatus(prev => [...prev, updatedTicket]);
    setTickets(prev => prev.filter(t => t.id !== ticket.id));
    setInProgress(prev => prev + 1);
  };

  // ✅ Move In Progress → Resolved
  const handleTaskComplete = (completedTicket) => {

    const updatedTicket = { ...completedTicket, status: "closed" };

    setTaskStatus(prev =>
      prev.filter(t => t.id !== completedTicket.id)
    );

    setResolvedTickets(prev => [...prev, updatedTicket]);

    // prevent negative bug
    setInProgress(prev => prev > 0 ? prev - 1 : 0);
    setResolved(prev => prev + 1);
  };

  // ✅ Loader UI
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

          {/* LEFT SIDE */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-purple-600 mb-2">
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

                <button
                  onClick={fetchTickets}
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:scale-105 transition"
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

          {/* RIGHT SIDE */}
          <div className="lg:w-1/3 space-y-8">

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4">
                Task Status ({inProgress})
              </h3>

              <TaskStatus
                tasks={taskStatus}
                onComplete={handleTaskComplete}
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4">
                Resolved ({resolved})
              </h3>

              <ResolvedList resolved={resolvedTickets} />
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;