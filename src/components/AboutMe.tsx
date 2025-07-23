import React from 'react';
import { Laptop, Coffee, Headphones, BookOpen, Code, Heart } from 'lucide-react';

const AboutMe: React.FC = () => {
  const features = [
    {
      icon: <Laptop className="w-10 h-10 text-primary-500" />,
      title: 'CS Student',
      description: 'Currently pursuing a BS in Computer Science with a focus on AI and software engineering.',
    },
    {
      icon: <Code className="w-10 h-10 text-primary-500" />,
      title: 'Developer',
      description: 'Building applications that blend technical excellence with intuitive user experience.',
    },
    {
      icon: <Coffee className="w-10 h-10 text-primary-500" />,
      title: 'Coffee Enthusiast',
      description: 'Powered by espresso and the occasional energy drink during hackathons.',
    },
    {
      icon: <Headphones className="w-10 h-10 text-primary-500" />,
      title: 'Music Lover',
      description: 'Lo-Fi beats and indie rock fuel my coding sessions and creative thinking.',
    },
    {
      icon: <BookOpen className="w-10 h-10 text-primary-500" />,
      title: 'Lifelong Learner',
      description: 'Always exploring new technologies and expanding my knowledge base.',
    },
    {
      icon: <Heart className="w-10 h-10 text-primary-500" />,
      title: 'Open Source Contributor',
      description: 'Passionate about contributing to the developer community and open source projects.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-dark-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
            I'm not just a programmer—I'm a problem solver, creative thinker, and tech enthusiast who happens to write code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white">{feature.title}</h3>
              <p className="text-dark-600 dark:text-dark-200">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-dark-700 p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">My Journey</h3>
              <p className="text-dark-600 dark:text-dark-200 mb-4">
                My coding journey began when I was 15, tinkering with HTML and CSS to create simple websites. That initial spark of creativity evolved into a deep passion for software development.
              </p>
              <p className="text-dark-600 dark:text-dark-200 mb-4">
                Currently in my third year of Computer Science studies, I've developed a diverse skill set spanning web development, mobile applications, and machine learning projects.
              </p>
              <p className="text-dark-600 dark:text-dark-200">
                I believe in creating technology that not only functions well but also enhances human experiences. When I'm not coding, you'll find me hiking, playing guitar, or discussing the latest tech trends over coffee.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-dark-600 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-dark-900 dark:text-white font-mono">Quick Facts:</h4>
              <ul className="space-y-3 text-dark-600 dark:text-dark-200">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                  Computer Science student at Tech University
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                  Former intern at InnovateNow Startup
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                  2x Hackathon winner (DevFest 2023, CodeJam 2022)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                  Open-source contributor to 3 major projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                  Currently working on AI-powered educational tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                  Avid photographer and amateur guitarist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;