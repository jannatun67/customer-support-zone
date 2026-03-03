import React from 'react';

const ResolvedList = ({ resolved }) => {
  if (resolved.length === 0) {
    return (
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 text-center border border-emerald-100">
        <i className="fas fa-check-circle text-4xl text-emerald-300 mb-3"></i>
        <p className="text-emerald-600 font-medium">No resolved tickets yet</p>
        <p className="text-sm text-emerald-400 mt-1">Complete tasks to see them here</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {resolved.map((ticket) => (
        <div
          key={ticket.id}
          className="group relative bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-100 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center text-white shadow-lg">
              <i className="fas fa-check text-sm"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-700 mb-1">{ticket.title}</h4>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{ticket.customer}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>
                  <i className="far fa-calendar-check mr-1 text-emerald-500"></i>
                  Completed
                </span>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <i className="fas fa-star text-yellow-400 text-xs"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResolvedList;