import React from 'react';
import { toast } from 'react-toastify';

const TaskStatus = ({ tasks, onComplete }) => {
  const handleComplete = (task) => {
    onComplete(task);
    toast.success(`✅ Ticket "${task.title}" completed successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  if (tasks.length === 0) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center border-2 border-dashed border-gray-300">
        <div className="relative">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
            <i className="fas fa-tasks text-4xl text-gray-400"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">No Tasks in Progress</h3>
          <p className="text-gray-500">Click on any ticket to start working on it</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          {/* Progress Bar Animation */}
          {/* <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"
               style={{ width: `${Math.random() * 30 + 50}%` }}></div> */}
          
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-2 pr-4">{task.title}</h4>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="flex items-center text-gray-600">
                    <i className="fas fa-user-circle mr-1 text-purple-500"></i>
                    {task.customer}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center text-gray-600">
                    <i className="far fa-clock mr-1 text-blue-500"></i>
                    {new Date(task.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleComplete(task)}
                className="relative overflow-hidden group/btn bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                <i className="fas fa-check mr-1"></i>
                Complete
              </button>
            </div>
            
            {/* Progress Indicator */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span className="font-semibold text-purple-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full animate-progress"
                     style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;