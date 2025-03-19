import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import FeedbackForm from "./components/FeedbackForm";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Hero />
        <ContentSection />
        <CardGrid />
        <FeedbackForm />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
