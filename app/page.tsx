import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollTrace from "@/components/ScrollTrace";
import Section from "@/components/Section";
import ProjectList from "@/components/ProjectList";
import About from "@/components/About";
import SkillGrid from "@/components/SkillGrid";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-chassis">
      <ScrollTrace />
      <Nav />
      <Hero />

      <Section id="kerja" label="proyek terpilih" title="Kerja yang pernah saya bangun">
        <ProjectList />
      </Section>

      <Section id="tentang" label="latar belakang" title="Tentang saya">
        <About />
      </Section>

      <Section id="stack" label="alat sehari-hari" title="Stack yang saya pakai">
        <SkillGrid />
      </Section>

      <Section id="kontak" label="hubungi saya" title="Mari mengobrol">
        <ContactPanel />
      </Section>

      <Footer />
    </main>
  );
}
