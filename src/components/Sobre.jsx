import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sobre() {
  const cards = [
    {
      name: "JESSICA FAUSTINO DOS SANTOS",
      role: "Especialista em Direito Trabalhista, Consumidor e Eleitoral.\nFocada em transformar desafios jurídicos em soluções reais para nossos clientes.",
      img: "/jessica.jpg",
      linkedin: "https://www.linkedin.com/in/j%C3%A9ssica-faustino-dos-santos-116245119/",
      instagram: "https://www.instagram.com/jessica.faustino/",
    },
    {
      name: "MARIANA MANTOVANI",
      role: "Especialista em Direito Cível, Consumidor e Trabalhista.\nComprometida com a excelência e o acolhimento em cada atendimento.",
      img: "/mariana.jpg",
      linkedin: "https://www.linkedin.com/in/marianafmantovani/",
      instagram: "https://www.instagram.com/marianafmantovani.advogada/",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="sobre"
      className="py-20 bg-gradient-to-br from-beige via-brown2 to-brown3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-brown3 drop-shadow-lg">
          Quem somos nós?
        </h1>
        <motion.img
          src="/ambos.jpg"
          alt="Faustino & Mantovani"
          className="w-72 h-72 md:w-96 md:h-82 rounded-2xl object-cover object-center mx-auto shadow-2xl border-2 border-black bg-white mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        />
        <motion.p
          className="text-brown1 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Somos um escritório apaixonado pelo direito e pelas pessoas! Atuamos com ética, empatia e inovação nas áreas{" "}
          <span className="font-semibold text-brown3">
            Civil, Trabalhista, Previdenciário, Eleitoral, Penal e do Consumidor
          </span>
          .<br />
          Buscamos soluções personalizadas, acolhendo cada história com atenção e respeito.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-brown2 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              variants={cardVariants}
            >
              <img
                src={card.img}
                alt={card.name}
                className="w-32 h-52 rounded-full object-cover object-center border-4 border-brown1 shadow-lg mb-4 bg-white"
              />
              <h3 className="text-2xl font-semibold text-brown3 mb-2">{card.name}</h3>
              <p className="mt-2 text-brown1 text-base font-light whitespace-pre-line">{card.role}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={card.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown3 hover:text-brown1 text-2xl cursor-pointer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={card.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown3 hover:text-brown1 text-2xl cursor-pointer"
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
