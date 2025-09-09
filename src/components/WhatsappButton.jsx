import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloatingButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.me/17996205009"
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-btn"
        className="whatsapp-pulse bg-green-500 hover:bg-brown1 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Converse no WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      {/* Animação pulse opcional */}
      <style jsx>{`
        .whatsapp-pulse {
          animation: whatsapp-pulse 1.5s infinite;
        }
        @keyframes whatsapp-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(34,197,94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 14px rgba(34,197,94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34,197,94, 0);
          }
        }
      `}</style>
    </div>
  );
}