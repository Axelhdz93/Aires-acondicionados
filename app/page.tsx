import FirtsBlock from "@/components/FirtsBlock/FirtsBlock";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import Packages from "@/components/Packages/Packages";
import Services from "@/components/Usservices/Usservices";

export default function Home() {
  return (
    <>
      <Header />
      <FirtsBlock />
      <Services />
      <Packages />
      <Footer />
    </>
  );
}
