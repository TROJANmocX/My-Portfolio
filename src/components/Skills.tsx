import React from 'react';
import { skills } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-dark-900 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
            A collection of technologies I've worked with and my proficiency levels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">{skill.icon}</span>
                  <span className="font-medium text-lg text-dark-800 dark:text-white">{skill.name}</span>
                </div>
                <span className="text-primary-600 dark:text-primary-400 font-mono">{skill.percentage}%</span>
              </div>
              <div className="h-4 w-full bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:animate-pulse`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-dark-900 dark:text-white">Frontend Development</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center bg-white dark:bg-dark-700 p-4 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-dark-700 dark:text-dark-200">React.js</span>
              </div>
              <div className="flex items-center bg-white dark:bg-dark-700 p-4 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-dark-700 dark:text-dark-200">HTML/CSS</span>
              </div>
              <div className="flex items-center bg-white dark:bg-dark-700 p-4 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-dark-700 dark:text-dark-200">TypeScript</span>
              </div>
              <div className="flex items-center bg-white dark:bg-dark-700 p-4 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-dark-700 dark:text-dark-200">Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-dark-900 dark:text-white">Backend Development</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center bg-white dark:bg-dark-700 p-4 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-dark-700 dark:text-dark-200">Node.js</span>
              </div>
              <div className="flex items-center bg-white dark:bg-dark-700 p-4 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-dark-700 dark:text-dark-200">Express</span>
              </div>
              <div className="flex items-center bg-white dark:bg-dark-700 p-4 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-dark-700 dark:text-dark-200">MongoDB</span>
              </div>
              <div className="flex items-center bg-white dark:bg-dark-700 p-4 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-dark-700 dark:text-dark-200">SQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-dark-600 dark:text-dark-300 italic">
            "Always learning, always improving. The skills shown here represent my current journey, not my destination."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;