import { FaEnvelope } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-beige py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center mb-8 md:mb-0">
          <p className="flex items-center mb-3">
            <FaEnvelope className="mr-2" />
            <strong className="mr-2">Email:</strong>
            <a
              href="mailto:adv.faustinomantovani@gmail.com"
              className="hover:underline text-beige break-all"
            >
              adv.faustinomantovani@gmail.com
            </a>
          </p>
          <p className="flex items-center mb-3">
            <FaWhatsapp className="mr-2" />
            <strong className="mr-2">WhatsApp:</strong>
            <a
              href="https://wa.me/17996205009"
              className="hover:underline text-beige"
            >
              (17) 99620-5009
            </a>
          </p>
          <p className="mb-3">
            <strong>Endereço:</strong>
            <br />
            <span className="block">
              R. São Paulo, 3466 - Vila Marim, Votuporanga - SP, 15500-010
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.050820810253!2d-49.97809962400166!3d-20.42198975381894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bd592724313d91%3A0xc476c2cafc607a24!2sR.%20S%C3%A3o%20Paulo%2C%203466%20-%20Vila%20Marim%2C%20Votuporanga%20-%20SP%2C%2015500-010!5e0!3m2!1spt-BR!2sbr!4v1756254862400!5m2!1spt-BR!2sbr"
            width="100%"
            height="220"
            style={{
              border: 0,
              borderRadius: "1rem",
              minWidth: "200px",
              maxWidth: "100%",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-md"
            title="Localização no Google Maps"
          ></iframe>
        </div>
      </div>
      <p className="text-center mt-8 text-xs sm:text-sm text-beige px-2">
        &copy; 2024 Faustino & Mantovani Advocacia. Todos os direitos reservados.
      </p>
    </footer>
  );
}