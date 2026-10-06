import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Faculties from "./components/Faculties";
import News from "./components/News";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Admission from "./components/Admission";
import WhyJami from "./components/WhyJami";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Admission />
      <WhyJami />

      <main>
        <Hero />
        <About />
        <Faculties />
        <News />
        <Stats />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
