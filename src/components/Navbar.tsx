import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
  Home, User, Code, FileText, Activity, Terminal, 
  MessageSquare, Music, Mail, Menu, X, ChevronDown 
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mainNavItems = [
    { name: 'Home', icon: <Home size={20} />, target: 'home' },
    { name: 'About', icon: <User size={20} />, target: 'about' },
  ];

  const projectsDropdown = [
    { name: 'All Projects', target: 'projects' },
    { name: 'Real Projects', target: 'projects-real' },
    { name: 'Fun Projects', target: 'projects-fun' },
    { name: 'Featured Work', target: 'projects-featured' },
  ];

  const skillsDropdown = [
    { name: 'Technical Skills', target: 'skills-technical' },
    { name: 'Soft Skills', target: 'skills-soft' },
    { name: 'Certifications', target: 'skills-certs' },
  ];

  const interactiveItems = [
    { name: 'Terminal', icon: <Terminal size={20} />, target: 'terminal' },
    { name: 'Chatbot', icon: <MessageSquare size={20} />, target: 'chatbot' },
    { name: 'Music', icon: <Music size={20} />, target: 'music' },
  ];

  const contactItems = [
    { name: 'Contact', icon: <Mail size={20} />, target: 'contact' },
    { name: 'Resume', icon: <FileText size={20} />, target: 'resume' },
  ];

  const DropdownMenu = ({ title, items }: { title: string; items: { name: string; target: string }[] }) => {
    const isOpen = activeDropdown === title;

    return (
      <div className="relative">
        <button
          onClick={() => setActiveDropdown(isOpen ? null : title)}
          className="flex items-center space-x-1 py-2 px-3 rounded-full text-dark-600 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-300"
        >
          <span>{title}</span>
          <ChevronDown
            size={16}
            className={`transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-dark-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {items.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 text-sm text-dark-600 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-700 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.relative')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-mono font-semibold text-dark-900 dark:text-white cursor-pointer group"
        >
          arish
          <span className="text-primary-500 inline-block group-hover:animate-bounce">@</span>
          dev
          <span className="animate-terminal-cursor">_</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 backdrop-blur-sm bg-white/5 dark:bg-dark-700/20 rounded-full border border-gray-200 dark:border-dark-600 px-2">
          {mainNavItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="bg-primary-500/20 text-primary-600 dark:text-primary-400"
              className="flex items-center space-x-1 py-2 px-3 rounded-full text-dark-600 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-300 cursor-pointer"
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}

          <DropdownMenu title="Projects" items={projectsDropdown} />
          <DropdownMenu title="Skills" items={skillsDropdown} />

          {interactiveItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="bg-primary-500/20 text-primary-600 dark:text-primary-400"
              className="flex items-center space-x-1 py-2 px-3 rounded-full text-dark-600 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-300 cursor-pointer"
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}

          {contactItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="bg-primary-500/20 text-primary-600 dark:text-primary-400"
              className="flex items-center space-x-1 py-2 px-3 rounded-full text-dark-600 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-300 cursor-pointer"
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}

          <div className="px-2 border-l border-gray-200 dark:border-dark-600">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu} 
            className="p-2 rounded-md text-dark-600 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white dark:bg-dark-800 shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] border-b border-gray-200 dark:border-dark-700' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          {mainNavItems.concat(
            [{ name: 'Projects', icon: <Code size={20} />, target: 'projects' }],
            [{ name: 'Skills', icon: <Activity size={20} />, target: 'skills' }],
            interactiveItems,
            contactItems
          ).map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 py-3 px-4 border-b border-gray-100 dark:border-dark-700 text-dark-600 dark:text-dark-100 hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-300"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;