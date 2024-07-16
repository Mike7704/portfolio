import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <>
      <SideBar />
      <main>
        <section id="home" className="section">
          <h1>Home</h1>
          <p>Home section</p>
        </section>
        <section id="about" className="section">
          <h1>About</h1>
          <p>About section.</p>
        </section>
        <section id="projects" className="section">
          <h1>Projects</h1>
          <p>Projects section.</p>
        </section>
        <section id="contact" className="section">
          <h1>Contact</h1>
          <p>Contact section.</p>
        </section>
      </main>
    </>
  );
}
