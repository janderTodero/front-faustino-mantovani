export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-zinc-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-300 text-center drop-shadow-lg">
          Contato
        </h2>
        <p className="text-brown1 text-lg md:text-xl max-w-2xl mx-auto text-center mb-10">
          Fale conosco! Tire suas dúvidas, solicite atendimento ou envie sua mensagem pelo formulário abaixo.
        </p>
        <form
          action="https://formsubmit.co/adv.faustinomantovani@gmail.com"
          method="POST"
          className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-brown2 flex flex-col gap-6"
        >
          {/* Disable captcha and redirect on success (opcional) */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://faustinomantovani.com.br/obrigado.html" />

          <div>
            <label htmlFor="nome" className="block text-brown3 font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="w-full border border-brown2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brown2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-brown3 font-semibold mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-brown2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brown2"
              required
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-brown3 font-semibold mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              className="w-full border border-brown2 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brown2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-brown2 text-beige px-6 py-3 rounded-full font-bold shadow hover:bg-brown3 transition mx-auto w-40"
          >
            Enviar
          </button>
        </form>
        <div className="mt-10 text-center text-brown1">
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:adv.faustinomantovani@gmail.com"
              className="underline hover:text-white"
            >
              adv.faustinomantovani@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Telefone:</strong>{" "}
            <a
              href="https://wa.me/17996205009"
              className="underline hover:text-white"
            >
              (17) 99620-5009
            </a>
          </p>
          <p>
            <strong>Endereço:</strong> R. São Paulo, 3466 - Vila Marim, Votuporanga - SP, 15500-010
          </p>
        </div>
      </div>
    </section>
  );
}