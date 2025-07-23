import React from 'react';
import { FileText, Download, Mail, MapPin, Phone, GraduationCap, Award, Code2, ExternalLink } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-dark-900 dark:text-white">Resume</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-10">
            {/* Contact & Download */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200 dark:border-dark-600 pb-6 mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-1">SYED ARISH Ali</h3>
                <div className="flex flex-wrap gap-4 text-dark-600 dark:text-dark-300 text-sm">
                  <span className="flex items-center gap-1"><Mail size={16}/> ss3390@srmist.edu.in</span>
                  <span className="flex items-center gap-1"><Phone size={16}/> +91 8858018326</span>
                  <span className="flex items-center gap-1"><MapPin size={16}/> Kanpur</span>
                </div>
              </div>
              <a 
                href="/resume.pdf" 
                download="SYED_ARISH_Ali_Resume.pdf"
                className="flex items-center gap-2 py-2 px-4 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-all"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>

            {/* Career Objective */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">Career Objective</h4>
              <p className="text-dark-600 dark:text-dark-200">
                Motivated Computer Science student eager to apply technical skills, creativity, and a strong work ethic in a collaborative environment. Passionate about building real-world solutions, growing through challenges, and delivering meaningful value to innovative teams.
              </p>
            </div>

            {/* Education */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-primary-500 mr-2" />
                <h4 className="text-xl font-semibold text-dark-900 dark:text-white">Education</h4>
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-[200px,1fr] gap-4">
                  <div className="text-dark-500 dark:text-dark-300 font-medium">2023 - 2027</div>
                  <div>
                    <h5 className="text-lg font-semibold text-dark-900 dark:text-white">B.Tech, Computer Science & Engineering</h5>
                    <p className="text-primary-600 dark:text-primary-400 mb-1">SRM IST</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-[200px,1fr] gap-4">
                  <div className="text-dark-500 dark:text-dark-300 font-medium">2022</div>
                  <div>
                    <h5 className="text-lg font-semibold text-dark-900 dark:text-white">Senior Secondary (XII), Science</h5>
                    <p className="text-primary-600 dark:text-primary-400 mb-1">Escorts World School, Kanpur (CBSE board)</p>
                    <p className="text-dark-600 dark:text-dark-300">Percentage: 74.50%</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-[200px,1fr] gap-4">
                  <div className="text-dark-500 dark:text-dark-300 font-medium">2020</div>
                  <div>
                    <h5 className="text-lg font-semibold text-dark-900 dark:text-white">Secondary (X)</h5>
                    <p className="text-primary-600 dark:text-primary-400 mb-1">Seth Anandram Jaipuriya School, Hamirpur (CBSE board)</p>
                    <p className="text-dark-600 dark:text-dark-300">Percentage: 85.00%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Code2 size={24} className="text-primary-500 mr-2" />
                <h4 className="text-xl font-semibold text-dark-900 dark:text-white">Work Experience</h4>
              </div>
              <div className="text-dark-400 dark:text-dark-300 italic">Add job / internship experience here</div>
            </div>

            {/* Extra Curricular Activities */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-primary-500 mr-2" />
                <h4 className="text-xl font-semibold text-dark-900 dark:text-white">Extra Curricular Activities</h4>
              </div>
              <div className="text-dark-400 dark:text-dark-300 italic">Add extra curricular activities here</div>
            </div>

            {/* Trainings / Courses */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-primary-500 mr-2" />
                <h4 className="text-xl font-semibold text-dark-900 dark:text-white">Trainings / Courses</h4>
              </div>
              <div className="text-dark-400 dark:text-dark-300 italic">Add training / course here</div>
            </div>

            {/* Academic / Personal Projects */}
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Award size={24} className="text-primary-500 mr-2" />
                <h4 className="text-xl font-semibold text-dark-900 dark:text-white">Academic / Personal Projects</h4>
              </div>
              <div className="text-dark-400 dark:text-dark-300 italic">Add academic / personal project here</div>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {['Python','Problem Solving','Logical reasoning','AI Image Generation','Prompt Engineering','Blogging','Team Management'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200 text-sm font-medium">
                    {skill}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-600 text-dark-400 dark:text-dark-200 text-sm font-medium italic">Add skill</span>
              </div>
            </div>

            {/* Portfolio / Work Samples */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">Portfolio / Work Samples</h4>
              <div className="flex items-center gap-3">
                <a href="https://github.com/TROJANmocX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
                  <ExternalLink size={18}/> GitHub link
                </a>
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-600 text-dark-400 dark:text-dark-200 text-sm font-medium italic">Add portfolio / work sample</span>
              </div>
            </div>

            {/* Accomplishments / Additional Details */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">Accomplishments / Additional Details</h4>
              <div className="text-dark-400 dark:text-dark-300 italic">Add accomplishment / additional detail</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a 
            href="/resume.pdf" 
            download="SYED_ARISH_Ali_Resume.pdf"
            className="flex items-center gap-2 py-3 px-6 rounded-full bg-dark-900 text-white dark:bg-white dark:text-dark-900 hover:bg-dark-800 dark:hover:bg-gray-100 transition-all"
          >
            <FileText size={20} /> View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;