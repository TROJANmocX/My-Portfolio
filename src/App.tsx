import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import Chatbot from './components/Chatbot';
import MusicWidget from './components/MusicWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update title
    document.title = "Arish | CS Student & Developer";

    // Create a placeholder PDF for the resume
    const resumeLink = document.createElement('a');
    resumeLink.id = 'resume-link';
    resumeLink.href = '#';
    resumeLink.download = 'Arish_Resume.pdf';
    resumeLink.style.display = 'none';
    document.body.appendChild(resumeLink);

    return () => {
      document.body.removeChild(resumeLink);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-dark-900 dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <AboutMe />
          <Projects />
          <Resume />
          <Skills />
          <Terminal />
          <Chatbot />
          <MusicWidget />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;