import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection, type ProjectItem } from './components/ProjectsSection';
import { ContactModal, ProjectModal } from './components/Modals';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <main
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA]"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection onContactClick={() => setContactOpen(true)} />
      <MarqueeSection />
      <AboutSection onContactClick={() => setContactOpen(true)} />
      <ServicesSection />
      <ProjectsSection onSelectProject={setSelectedProject} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => setContactOpen(true)}
      />
    </main>
  );
}
