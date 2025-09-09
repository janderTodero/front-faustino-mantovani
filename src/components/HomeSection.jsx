import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomeSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // delay entre animações dos filhos
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <section
      id="home"
      className="
        relative h-screen flex items-center justify-center text-center text-beige
        bg-cover bg-top bg-no-repeat
        bg-[url('/background5.webp')] md:bg-[url('/ambos.jpg')]
      "
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <motion.div
        className="relative z-10 max-w-3xl px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3
          className="text-white text-2xl md:text-brown1 lg:text-4xl tracking-wider"
          variants={fadeUp}
        >
          FAUSTINO &amp; MANTOVANI
        </motion.h3>

        <motion.h2
          className="text-3xl md:text-5xl font-bold mt-2 text-beige"
          variants={fadeUp}
        >
          ADVOCACIA
        </motion.h2>

        <motion.p
          className="mt-4 text-sm md:text-lg leading-relaxed text-beige"
          variants={fadeUp}
        >
          Escritório de Advocacia em Votuporanga-SP
          <br />
          Civil | Trabalhista | Previdenciário | Eleitoral | Penal | Consumidor
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs mx-auto"
          variants={fadeUp}
        >
          <motion.a
            href="mailto:adv.faustinomantovani@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            className="w-full sm:w-auto px-4 py-2 bg-brown2 hover:bg-brown1 text-white rounded-lg shadow-md transition text-base font-semibold"
          >
            Conte seu caso
          </motion.a>

          <motion.a
            href="https://wa.me/17996205009"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            className="w-full sm:w-auto px-4 py-2 bg-green-500 hover:bg-brown3 text-white rounded-lg shadow-md flex items-center justify-center gap-2 transition text-base font-semibold"
          >
            <FaWhatsapp className="w-5 h-5" /> WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
