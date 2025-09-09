import { useRef } from "react";
import { useState } from "react";
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

  return (
    <section id="atuacao" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-brown3">
          Áreas de Atuação
        </h1>
        <div className="space-y-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="border border-brown2 rounded-lg overflow-hidden cursor-pointer" // cursor-pointer aqui
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex items-center justify-between px-4 py-3 text-lg font-semibold bg-brown2 hover:bg-brown1 text-black transition cursor-pointer" // cursor-pointer aqui
                type="button"
              >
                <span className="flex items-center cursor-pointer"> {/* cursor-pointer aqui */}
                  <FontAwesomeIcon
                    icon={area.icon}
                    className="mr-2 text-black cursor-pointer" // cursor-pointer aqui
                  />
                  {area.title}
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  } cursor-pointer`} // cursor-pointer aqui
                />
              </button>
              <DropdownContent open={openIndex === index}>
                {area.description}
              </DropdownContent>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://wa.me/17996205009"
            className="inline-block bg-brown3 text-beige px-6 py-3 rounded-lg shadow hover:bg-brown1 hover:text-white transition cursor-pointer" // cursor-pointer aqui
          >
            Contate-nos
          </a>
        </div>
      </div>
    </section>
  );
}

// Componente separado para animar suavemente a expansão/retração
function DropdownContent({ open, children }) {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      style={{
        maxHeight: open ? ref.current?.scrollHeight + "px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className="px-4 bg-beige text-brown1"
    >
      <div className="py-4">{children}</div>
    </div>
  );
}