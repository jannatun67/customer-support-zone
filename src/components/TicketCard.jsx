import React from 'react';
// import { toast } from 'react-toastify';

const TicketCard = ({ ticket, onSelect }) => {
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'from-red-500 to-pink-500';
      case 'High': return 'from-orange-500 to-red-500';
      case 'Medium': return 'from-yellow-500 to-orange-500';
      case 'Low': return 'from-green-500 to-emerald-500';
      default: return 'from-blue-500 to-purple-500';
    }
  };

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 'Critical': return 'fa-exclamation-triangle';
      case 'High': return 'fa-arrow-up';
      case 'Medium': return 'fa-minus';
      case 'Low': return 'fa-arrow-down';
      default: return 'fa-tag';
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleCardClick = () => {
    onSelect(ticket);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${getPriorityColor(ticket.priority)} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
      
      {/* Card */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100">
        {/* Priority Header */}
        <div className={`h-2 bg-gradient-to-r ${getPriorityColor(ticket.priority)}`}></div>
        
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getPriorityBadgeColor(ticket.priority)}`}>
                  <i className={`fas ${getPriorityIcon(ticket.priority)} mr-1`}></i>
                  {ticket.priority}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  <i className="far fa-clock mr-1"></i>
                  {formatDate(ticket.createdAt)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {ticket.title}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {ticket.customer.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {ticket.description}
          </p>
          
          {/* Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <i className="fas fa-user text-gray-500 text-xs"></i>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700 block">{ticket.customer}</span>
                <span className="text-xs text-gray-500">Customer</span>
              </div>
            </div>
            <div className="flex space-x-1">
              <button className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                <i className="fas fa-arrow-right text-sm"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default TicketCard;