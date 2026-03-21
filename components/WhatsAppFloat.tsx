"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappNumber = "+917088337100"; 
  const defaultMessage = "Hello Techtronica Team! I would like to connect.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-14 w-14 rounded-full
        bg-green-500 text-white
        shadow-lg
        hover:bg-green-600
        hover:scale-110
        transition-all duration-300
      "
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
