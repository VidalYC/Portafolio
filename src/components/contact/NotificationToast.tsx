import React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

interface Props {
  notification: {
    type: "success" | "error" | null;
    message: string;
  };
}

const NotificationToast: React.FC<Props> = ({ notification }) => {
  if (!notification.type) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center space-x-3 ${
        notification.type === "success"
          ? "bg-green-500 text-white"
          : "bg-red-500 text-white"
      }`}
    >
      {notification.type === "success" ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <AlertCircle className="w-5 h-5" />
      )}
      <span>{notification.message}</span>
    </div>
  );
};

export default NotificationToast;
