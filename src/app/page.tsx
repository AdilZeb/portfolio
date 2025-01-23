import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <main className="min-h-screen  bg-charcoal">
      <div className="fixed right-0 z-10 bottom-10 bg-slate-200">
        <button className="p-4 ">^</button>
      </div>
      <Navigation/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

