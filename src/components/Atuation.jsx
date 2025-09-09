import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faHandshake,
  faPersonCane,
  faCheckToSlot,
  faHandcuffs,
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Atuacao() {
  const [openIndex, setOpenIndex] = useState(null);

  const areas = [
    {
      title: "Direito Civil",
      icon: faScaleBalanced,
      description:
        "O direito civil disciplina as relações privadas entre pessoas físicas e jurídicas. Abrange áreas como direitos de propriedade, contratos, família e responsabilidade civil. Visa assegurar a ordem jurídica e proteger os direitos individuais, promovendo a justiça nas interações sociais.",
    },
    {
      title: "Direito Trabalhista",
      icon: faHandshake,
      description:
        "O direito trabalhista regula as relações laborais entre empregadores e empregados, abordando contratos, salários, jornada de trabalho, férias e segurança no trabalho. Visa garantir condições justas e equitativas no ambiente laboral, protegendo os direitos dos trabalhadores.",
    },
    {
      title: "Direito Previdenciário",
      icon: faPersonCane,
      description:
        "O direito previdenciário trata dos direitos relacionados à seguridade social, abrangendo aposentadorias, pensões e benefícios por incapacidade. Visa garantir amparo financeiro e assistência social aos trabalhadores e seus dependentes.",
    },
    {
      title: "Direito Eleitoral",
      icon: faCheckToSlot,
      description:
        "O direito eleitoral regula os processos e procedimentos relacionados às eleições, desde o registro de candidaturas até a apuração dos votos. Visa garantir a lisura, transparência e legitimidade do processo democrático.",
    },
    {
      title: "Direito Penal",
      icon: faHandcuffs,
      description:
        "O direito penal define os crimes, suas penas e os meios de aplicação da lei penal. Visa proteger a sociedade, reprimir condutas socialmente prejudiciais e garantir a justiça por meio da punição de indivíduos que violam normas jurídicas.",
    },
    {
      title: "Direito do Consumidor",
      icon: faCartShopping,
      description:
        "O direito do consumidor protege os interesses e direitos dos consumidores nas relações de consumo. Regula a qualidade dos produtos e serviços, responsabilidade do fornecedor, práticas comerciais abusivas e oferece mecanismos para reparação de danos.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const dropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    show: { height: "auto", opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="atuacao" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1
          className="text-3xl font-bold text-center mb-10 text-brown3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Áreas de Atuação
        </motion.h1>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className="border border-brown2 rounded-lg overflow-hidden cursor-pointer"
              variants={cardVariants}
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex items-center justify-between px-4 py-3 text-lg font-semibold bg-brown2 hover:bg-brown1 text-black transition cursor-pointer"
                type="button"
              >
                <span className="flex items-center cursor-pointer">
                  <FontAwesomeIcon icon={area.icon} className="mr-2 text-black cursor-pointer" />
                  {area.title}
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform duration-300 cursor-pointer ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="px-4 bg-beige text-brown1 overflow-hidden cursor-pointer"
                  >
                    <div className="py-4">{area.description}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://wa.me/17996205009"
            className="inline-block bg-brown3 text-beige px-6 py-3 rounded-lg shadow hover:bg-brown1 hover:text-white transition cursor-pointer"
          >
            Contate-nos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
