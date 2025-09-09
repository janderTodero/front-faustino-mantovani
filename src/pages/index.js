import Atuacao from "@/components/Atuation";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import HomeSection from "@/components/HomeSection";
import Instagram from "@/components/Instagram";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <Atuacao />
      <Sobre />
      <Contato />
      <Instagram />
      <Footer />
    </div>
  );
}
