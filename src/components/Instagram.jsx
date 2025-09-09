import { useEffect } from "react";

export default function Instagram() {
  useEffect(() => {
    // Adiciona o script do Instagram para o embed funcionar
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="instagram"
      className="py-20 bg-gradient-to-br from-white via-brown2 to-brown1"
    >
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-2 text-brown3 text-center drop-shadow-lg font-play">
          Acompanhe nossos Reels no Instagram
        </h2>
        <p className="text-xl text-brown1 mb-8 text-center">
          Conteúdo dinâmico, dicas jurídicas e bastidores do nosso escritório. Siga e fique por dentro das novidades!
        </p>
        <div className="mb-8 w-full flex justify-center">
          {/* Instagram Reel Embed */}
          <blockquote
            className="instagram-media rounded-xl shadow-xl border-2 border-brown2"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DJ7b3cXPP5C/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "16px",
              boxShadow: "0 8px 32px 0 rgba(80,64,32,0.20)",
              margin: "1px",
              maxWidth: "420px",
              minWidth: "320px",
              padding: 0,
              width: "100%",
            }}
          ></blockquote>
        </div>
        <div className="flex flex-col items-center gap-2">
          <a
            href="https://www.instagram.com/adv.faustinomantovani/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition"
          >
            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="6" width="36" height="36" rx="8" fill="white" fillOpacity="0.08" />
              <path d="M18 17V31L32 24L18 17Z" fill="white" />
              <rect x="6" y="6" width="36" height="36" rx="8" stroke="white" strokeWidth="3" />
            </svg>
            Assistir mais Reels
          </a>
          <span className="text-black text-base mt-4 text-center font-medium">
            Siga <b>@adv.faustinomantovani</b> e acompanhe conteúdos exclusivos!
          </span>
        </div>
      </div>
    </section>
  );
}