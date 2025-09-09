import { FaWhatsapp } from "react-icons/fa";

export default function HomeSection() {
  return (
    <section
    id="home"
    className="relative h-screen flex items-center justify-center text-center text-beige bg-cover bg-top bg-no-repeat"
    style={{ backgroundImage: "url('/ambos.jpg')" }}
  >
    <div className="absolute inset-0 bg-black opacity-60"></div>

    <div className="relative z-10 max-w-3xl px-4">
      <h3 className="text-white text-2xl md:text-brown1 lg:text-4xl tracking-wider">
        FAUSTINO &amp; MANTOVANI
      </h3>

      <h2 className="text-3xl md:text-5xl font-bold mt-2 text-beige">
        ADVOCACIA
      </h2>

      <p className="mt-4 text-sm md:text-lg leading-relaxed text-beige">
        Escritório de Advocacia em Votuporanga-SP
        <br />
        Civil | Trabalhista | Previdenciário | Eleitoral | Penal | Consumidor
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs mx-auto">
        <a
          href="mailto:adv.faustinomantovani@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-4 py-2 bg-brown2 hover:bg-brown1 text-white rounded-lg shadow-md transition text-base font-semibold"
        >
          Conte seu caso
        </a>
        <a
          href="https://wa.me/17996205009"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-4 py-2 bg-green-500 hover:bg-brown3 text-white rounded-lg shadow-md flex items-center justify-center gap-2 transition text-base font-semibold"
        >
          <FaWhatsapp className="w-5 h-5" /> WhatsApp
        </a>
      </div>
    </div>
  </section>
  );
}
