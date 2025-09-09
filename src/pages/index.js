import Atuacao from "@/components/Atuation";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import HomeSection from "@/components/HomeSection";
import Instagram from "@/components/Instagram";
import Sobre from "@/components/Sobre";
import WhatsappFloatingButton from "@/components/WhatsappButton";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Faustino & Mantovani | Consultoria Jurídica Especializada</title>
        <meta
          name="description"
          content="Consultoria jurídica personalizada e soluções eficientes para você ou sua empresa. Especialistas em direito trabalhista, empresarial, civil e mais. Agende uma consulta!"
        />
        <meta
          property="og:title"
          content="Faustino & Mantovani | Consultoria Jurídica Especializada"
        />
        <meta
          property="og:description"
          content="Consultoria jurídica personalizada e soluções eficientes para você ou sua empresa. Especialistas em direito trabalhista, empresarial, civil e mais. Agende uma consulta!"
        />
        <meta property="og:image" content="https://faustinomantovani.com.br/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://faustinomantovani.com.br/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://faustinomantovani.com.br/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Faustino & Mantovani",
              url: "https://faustinomantovani.com.br/",
              logo: "https://faustinomantovani.com.br/logo.png",
              sameAs: [
                "https://www.instagram.com/jessica.faustino/",
                "https://www.instagram.com/marianafmantovani.advogada/",
              ],
              description:
                "Consultoria jurídica personalizada e soluções eficientes para você ou sua empresa. Especialistas em direito trabalhista, empresarial, civil e mais.",
            }),
          }}
        />
      </Head>
      <Header />
      <HomeSection />
      <Atuacao />
      <Sobre />
      <Contato />
      <Instagram />
      <Footer />
      <WhatsappFloatingButton />
    </div>
  );
}
