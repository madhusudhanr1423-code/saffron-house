import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import { BackToTop } from "../components/BackToTop";
import { Loader } from "../components/Loader";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Chef } from "../components/sections/Chef";
import { Signature } from "../components/sections/Signature";
import { Menu } from "../components/sections/Menu";
import { WhyUs } from "../components/sections/WhyUs";
import { Gallery } from "../components/sections/Gallery";
import { Testimonials } from "../components/sections/Testimonials";
import { Reserve } from "../components/sections/Reserve";
import { FAQ } from "../components/sections/FAQ";
import { Contact } from "../components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Chef />
        <Signature />
        <Menu />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Reserve />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
