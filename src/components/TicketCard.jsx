import React from "react";
import { toast } from "react-toastify";

const TicketCard = ({ ticket, onSelect }) => {

  const handleClick = () => {
    onSelect(ticket);

    // ✅ Toast message
    toast.success("Ticket added successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  };

  const getPriorityTextColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      case "Critical":
        return "text-pink-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "open":
        return "bg-green-100 text-green-700";
      case "in-progress":
        return "bg-yellow-100 text-yellow-700";
      case "closed":
        return "bg-gray-200 text-gray-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  const formatStatusText = (status) => {
    if (status === "in-progress") return "In-Progress";
    return status?.charAt(0).toUpperCase() + status?.slice(1);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition cursor-pointer"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {ticket.title}
        </h2>

        <span
          className={`px-3 py-1 text-sm rounded-full font-medium ${getStatusStyle(ticket.status)}`}
        >
          ● {formatStatusText(ticket.status)}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {ticket.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm">
        <div>
          <p className="text-gray-500">#{ticket.id}</p>
          <p className={`font-semibold ${getPriorityTextColor(ticket.priority)}`}>
            {ticket.priority?.toUpperCase()} PRIORITY
          </p>
        </div>

        <div className="text-right">
          <p className="text-gray-700 font-medium">
            {ticket.customer}
          </p>
          <p className="text-gray-500">
            {formatDate(ticket.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;