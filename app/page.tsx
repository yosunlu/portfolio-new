import About from "@/components/about";
import Container from "@/components/container";
import Project from "@/components/projects";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <main >
      <></>
      <Container>
        <section className="min-h-screen">
          <About/>
        </section>
        <section className="min-h-screen">
          <Project/>
        </section>
        <section className="min-h-screen">
          <Contact/>
        </section>
      </Container>
      
    </main>
  );
}
