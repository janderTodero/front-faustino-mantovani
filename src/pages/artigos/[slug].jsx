import Header from "@/components/header";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const API_URL = "https://faustinomantovani-api.onrender.com/api/articles";

export default function ArticlePage({ article, prevArticle, nextArticle }) {
  const router = useRouter();

  if (!article) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <div>
        <Head>
        <title>{article.title} | Faustino & Mantovani</title>
        <meta name="description" content={article.content?.substring(0, 160).replace(/<[^>]+>/g, '')} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content?.substring(0, 160).replace(/<[^>]+>/g, '')} />
        {article.imageUrl && <meta property="og:image" content={article.imageUrl} />}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://faustino-mantovani.vercel.app/artigos/${article.url}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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

          {/* Navegação de artigos */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-gray-200">
            {prevArticle ? (
              <Link
                href={`/artigos/${prevArticle.url}`}
                className="w-full md:w-auto rounded-md px-5 py-3 text-base font-semibold border border-brown3 text-brown3 hover:bg-brown3 hover:text-white transition-all text-center"
              >
                ← Artigo Anterior<br />
                <span className="font-normal text-sm">{prevArticle.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle ? (
              <Link
                href={`/artigos/${nextArticle.url}`}
                className="w-full md:w-auto rounded-md px-5 py-3 text-base font-semibold border border-brown3 text-brown3 hover:bg-brown3 hover:text-white transition-all text-center"
              >
                Próximo Artigo →<br />
                <span className="font-normal text-sm">{nextArticle.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
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
    params: { slug: article.url },
  }));

  return { paths, fallback: "blocking" };
}

// Busca os dados do artigo pelo slug, e também o anterior/próximo
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(API_URL);
    const articles = await res.json();

    const index = articles.findIndex((a) => a.url === params.slug);
    const article = articles[index] || null;
    const prevArticle = index > 0 ? articles[index - 1] : null;
    const nextArticle = index < articles.length - 1 ? articles[index + 1] : null;

    return {
      props: { article, prevArticle, nextArticle },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Erro ao buscar artigo:", error);
    return { props: { article: null, prevArticle: null, nextArticle: null } };
  }
}