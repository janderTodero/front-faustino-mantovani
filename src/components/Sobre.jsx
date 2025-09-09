import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-br from-beige via-brown2 to-brown3"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-brown3 drop-shadow-lg">
          Quem somos nós?
        </h1>
        <img
          src="/ambos.jpg"
          alt="Faustino & Mantovani"
          className="w-72 h-72 md:w-96 md:h-82 rounded-2xl object-cover object-center mx-auto shadow-2xl border-2 border-black bg-white"
        />
        <p className="mt-8 text-brown1 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Somos um escritório apaixonado pelo direito e pelas pessoas! Atuamos com ética, empatia e inovação nas áreas{" "}
          <span className="font-semibold text-brown3">
            Civil, Trabalhista, Previdenciário, Eleitoral, Penal e do Consumidor
          </span>
          .<br />
          Buscamos soluções personalizadas, acolhendo cada história com atenção e respeito.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Card Jessica */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-brown2 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="/jessica.jpg"
              alt="Jessica Faustino"
              className="w-32 h-52 rounded-full object-cover object-center border-4 border-brown1 shadow-lg mb-4 bg-white"
            />
            <h3 className="text-2xl font-semibold text-brown3 mb-2">
              JESSICA FAUSTINO DOS SANTOS
            </h3>
            <p className="mt-2 text-brown1 text-base font-light">
              Especialista em Direito Trabalhista, Consumidor e Eleitoral.
              <br />
              Focada em transformar desafios jurídicos em soluções reais para nossos clientes.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.linkedin.com/in/j%C3%A9ssica-faustino-dos-santos-116245119/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown3 hover:text-brown1 text-2xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/jessica.faustino/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown3 hover:text-brown1 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* Card Mariana */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-brown2 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="/mariana.jpg"
              alt="Mariana Mantovani"
              className="w-32 h-52 rounded-full object-cover object-center border-4 border-brown1 shadow-lg mb-4 bg-white"
            />
            <h3 className="text-2xl font-semibold text-brown3 mb-2">
              MARIANA MANTOVANI
            </h3>
            <p className="mt-2 text-brown1 text-base font-light">
              Especialista em Direito Cível, Consumidor e Trabalhista.
              <br />
              Comprometida com a excelência e o acolhimento em cada atendimento.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.linkedin.com/in/marianafmantovani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown3 hover:text-brown1 text-2xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/marianafmantovani.advogada/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown3 hover:text-brown1 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}