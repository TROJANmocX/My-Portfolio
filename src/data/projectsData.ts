export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  humor?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'EcoTrack',
    description: 'A full-stack application for tracking personal carbon footprint with data visualization and recommendations for reducing environmental impact.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    imageUrl: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    githubUrl: 'https://github.com/arishcs/ecotrack',
    demoUrl: 'https://ecotrack-demo.netlify.app',
    featured: true,
    humor: false
  },
  {
    id: 2,
    title: 'BarkBuddy',
    description: 'Tinder for Dogs! Swipe right to find the perfect playdate for your furry friend in your local area.',
    technologies: ['React Native', 'Firebase', 'Expo', 'Google Maps API'],
    imageUrl: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg',
    githubUrl: 'https://github.com/arishcs/barkbuddy',
    demoUrl: 'https://barkbuddy.app',
    featured: true,
    humor: true
  },
  {
    id: 3,
    title: 'AlgoViz',
    description: 'Interactive visualization tool for common algorithms and data structures to help CS students understand complex concepts.',
    technologies: ['JavaScript', 'D3.js', 'HTML Canvas', 'Web Workers'],
    imageUrl: 'https://images.pexels.com/photos/4664461/pexels-photo-4664461.jpeg',
    githubUrl: 'https://github.com/arishcs/algoviz',
    featured: true,
    humor: false
  },
  {
    id: 4,
    title: '404 Detector Detector',
    description: 'Tired of finding 404 errors? This tool finds 404 detectors so you can avoid them altogether!',
    technologies: ['Python', 'Machine Learning', 'Flask', 'Reverse Psychology API'],
    imageUrl: 'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg',
    githubUrl: 'https://github.com/arishcs/404-detector-detector',
    featured: false,
    humor: true
  },
  {
    id: 5,
    title: 'Quantum Weather',
    description: 'Weather app that predicts tomorrow\'s weather with today\'s quantum fluctuations. 60% of the time, it works every time!',
    technologies: ['React', 'Quantum API', 'CSS Animations', 'Temporal Paradox JS'],
    imageUrl: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg',
    githubUrl: 'https://github.com/arishcs/quantum-weather',
    featured: false,
    humor: true
  },
  {
    id: 6,
    title: 'Study Time Analyzer',
    description: 'A productivity tool that tracks study sessions and provides insights on optimal learning times and patterns.',
    technologies: ['Vue.js', 'Express', 'SQLite', 'ChartJS'],
    imageUrl: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg',
    githubUrl: 'https://github.com/arishcs/study-time-analyzer',
    featured: true,
    humor: false
  }
];