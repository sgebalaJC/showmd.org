import Nav from "@/components/site/nav";
import Footer from "@/components/site/footer";
import Hero from "@/components/sections/hero";
import Video from "@/components/sections/video";
import Services from "@/components/sections/services";
import IVMenu from "@/components/sections/iv-menu";
import HealthWellness from "@/components/sections/health-wellness";
import About from "@/components/sections/about";
import Story from "@/components/sections/story";
import Invest from "@/components/sections/invest";
import Reviews from "@/components/sections/reviews";
import Locations from "@/components/sections/locations";
import Faqs from "@/components/sections/faqs";
import Franchise from "@/components/sections/franchise";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Video />
        <Services />
        <IVMenu />
        <HealthWellness />
        <About />
        <Story />
        <Invest />
        <Reviews />
        <Locations />
        <Faqs />
        <Franchise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
