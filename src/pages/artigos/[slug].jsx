import Header from "@/components/header";
import { useRouter } from "next/router";

const API_URL = "https://faustinomantovani-api.onrender.com/api/articles";

export default function ArticlePage({ article }) {
  const router = useRouter();

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <div>
        <Header />
        <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-brown3 mb-6">{article.title}</h1>
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
          />
        )}
        <div
          className="text-brown1 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </section>
    </div>
    
  );
}

// Gera os paths dinamicamente
export async function getStaticPaths() {
  const res = await fetch(API_URL);
  const articles = await res.json();

  const paths = articles.map((article) => ({
    params: { slug: article.url }, // usa o campo url como slug
  }));

  return { paths, fallback: "blocking" };
}

// Busca os dados do artigo pelo slug
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(API_URL);
    const articles = await res.json();

    const article = articles.find((a) => a.url === params.slug) || null;

    return {
      props: { article },
      revalidate: 60, // revalida a cada 60s
    };
  } catch (error) {
    console.error("Erro ao buscar artigo:", error);
    return { props: { article: null } };
  }
}
