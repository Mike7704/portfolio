import SideBar from "@/components/SideBar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <>
      <SideBar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
