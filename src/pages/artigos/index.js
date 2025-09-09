import Header from "@/components/header";
import Link from "next/link";

const API_URL = "https://faustinomantovani-api.onrender.com/api/articles";

export default function ArticlesPage({ articles }) {
  return (
    <div>
      <Header />
      <section className="py-12 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-20 text-brown3 drop-shadow-lg">
          Artigos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/artigos/${article.url}`}
              className="group block rounded-3xl overflow-hidden shadow-xl bg-white border border-brown2 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {article.imageUrl && (
                <div className="relative w-full h-64 md:h-56 lg:h-48 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-brown3 mb-3">
                  {article.title}
                </h2>
                <p className="text-brown1 text-base mb-4 line-clamp-4">
                  {article.content.replace(/(<([^>]+)>)/gi, "")}
                </p>
                <p className="text-brown2 text-sm font-medium mb-2">
                  {article.author} |{" "}
                  {new Date(article.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <span className="inline-block mt-2 text-brown3 font-semibold border-b-2 border-brown3 group-hover:border-brown2 transition-all">
                  SAIBA MAIS...
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </div>
    
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    return {
      props: {
        articles: data || [],
      },
    };
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return {
      props: {
        articles: [],
      },
    };
  }
}
