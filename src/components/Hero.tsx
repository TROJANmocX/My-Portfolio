import React from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-grid-pattern dark:bg-dark-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 mt-8 md:mt-0">
            <div className="font-mono text-sm md:text-base text-primary-600 dark:text-primary-400 mb-2">
              Hello World! I'm
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-dark-900 dark:text-white">
              Arish
            </h1>
            <div className="text-xl md:text-2xl font-medium mb-6 text-dark-600 dark:text-dark-100 flex">
              <span className="mr-2">I build</span>
              <span className="text-primary-600 dark:text-primary-400">
                <Typewriter
                  words={[
                    'websites.',
                    'mobile apps.',
                    'algorithms.',
                    'ML models.',
                    'creative solutions.'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <p className="text-lg text-dark-600 dark:text-dark-200 mb-8 max-w-xl">
              Computer Science student passionate about creating elegant, efficient code that solves real-world problems. Also a fan of Lo-Fi beats and quality memes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/arishcs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-4 rounded-full bg-dark-900 text-white hover:bg-dark-800 transition-all dark:bg-white dark:text-dark-900 dark:hover:bg-gray-200"
              >
                <Github size={20} /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/arishcs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#0077b5] text-white hover:bg-[#00669e] transition-all"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className="flex items-center gap-2 py-2 px-4 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-all"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1 animate-gradient bg-size-200">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center overflow-hidden">
                <img 
                  src="/hero-image.jpg" 
                  alt="Arish" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-dark-800 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <ChevronDown size={24} className="text-primary-600 dark:text-primary-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;