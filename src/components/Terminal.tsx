import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, Minimize2, X } from 'lucide-react';

const Terminal: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const terminalLines = [
    '> Hello, I\'m Arish!',
    '> Welcome to my portfolio website.',
    '> Let me tell you a bit about myself...',
    '> I\'m a Computer Science student passionate about creating elegant solutions to complex problems.',
    '> My skills include Python, JavaScript, React, Node.js, and more.',
    '> I\'m currently seeking internship opportunities in software development.',
    '> Feel free to explore my projects and get in touch!',
    '> arish@dev:~$ _'
  ];

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        if (currentCharIndex < terminalLines[currentLineIndex].length) {
          setCurrentCharIndex(currentCharIndex + 1);
          setDisplayedText([
            ...displayedText.slice(0, currentLineIndex),
            terminalLines[currentLineIndex].substring(0, currentCharIndex + 1)
          ]);
        } else {
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
          setDisplayedText([...displayedText, '']);
        }
      }, currentLineIndex === terminalLines.length - 1 ? 300 : 30);

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, displayedText, terminalLines]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <section id="terminal" className="py-20 bg-grid-pattern dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-dark-900 dark:text-white">Terminal</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
            Watch as the terminal types out an introduction about me.
          </p>
        </div>

        <div 
          className={`mx-auto ${
            isFullscreen 
              ? 'fixed top-0 left-0 right-0 bottom-0 z-50 m-0 rounded-none' 
              : isMinimized 
                ? 'max-w-sm transform -translate-y-20 scale-75 opacity-80' 
                : 'max-w-3xl'
          } transition-all duration-300 overflow-hidden`}
        >
          <div className="bg-dark-900 text-green-400 rounded-lg shadow-2xl overflow-hidden font-mono">
            <div className="flex items-center justify-between px-4 py-2 bg-dark-800 border-b border-dark-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-white text-sm">arish@dev:~</div>
              <div className="flex space-x-2">
                <button 
                  onClick={toggleMinimize}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button 
                  onClick={toggleFullscreen}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
            
            <div 
              ref={terminalRef}
              className={`p-4 h-80 overflow-y-auto ${isFullscreen ? 'h-[calc(100vh-40px)]' : ''}`}
            >
              {displayedText.map((line, index) => (
                <div key={index} className="mb-2">
                  {line}
                  {index === displayedText.length - 1 && line === terminalLines[terminalLines.length - 1] && (
                    <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-terminal-cursor"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;