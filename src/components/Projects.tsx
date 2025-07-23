import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'real' | 'fun'>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'real') return !project.humor;
    if (filter === 'fun') return project.humor;
    return true;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-dark-900 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
            A mix of serious work and fun experiments that showcase my skills and personality.
          </p>

          <div className="flex justify-center mt-6 space-x-2">
            {['all', 'real', 'fun'].map((filterType) => (
              <motion.button
                key={filterType}
                onClick={() => setFilter(filterType as 'all' | 'real' | 'fun')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === filterType
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-200 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)} Projects
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id}
              variants={item}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 group border border-gray-100 dark:border-dark-700"
            >
              <div className="relative overflow-hidden h-48">
                <motion.img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                {project.humor && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-2 right-2 bg-accent-500 text-white text-xs py-1 px-2 rounded-full"
                  >
                    Just For Fun
                  </motion.div>
                )}
                {project.featured && !project.humor && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-2 right-2 bg-primary-500 text-white text-xs py-1 px-2 rounded-full"
                  >
                    Featured
                  </motion.div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">{project.title}</h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4 h-20 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-xs py-1 px-2 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-dark-600 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} className="mr-1" /> Code
                  </motion.a>
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-dark-600 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/arishcs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-3 px-6 rounded-full bg-dark-900 text-white dark:bg-white dark:text-dark-900 hover:bg-dark-800 dark:hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code size={20} className="mr-2" /> View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;