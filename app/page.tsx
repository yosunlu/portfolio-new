import About from "@/components/about";
import Container from "@/components/container";
import Project from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Container>
        <section className="min-h-screen">
          <About/>
        </section>
        <section className="min-h-screen">
          <Project/>
        </section>
      </Container>
      
    </main>
  );
}
