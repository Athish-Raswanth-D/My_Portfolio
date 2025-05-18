import React, { useState } from 'react';
import { Menu, X, User, BookOpen, Briefcase, Award, Code, Wrench, Terminal, Github as Git, Database, Globe, Cpu, Server } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('education');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = {
    education: {
      title: 'Education',
      icon: BookOpen,
      content: (
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-700"></div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -right-2 -top-2">
                <Terminal className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold">Chennai Institute Of Technology</h3>
              <p className="text-gray-600">B Tech Computer Science and Business Systems</p>
              <p className="text-gray-500">Nov 2022 - May 2026</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-gray-700 font-mono">CGPA: <span className="text-green-600">8.11</span>/10.00</p>
              </div>
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-2">Core Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Software Engineering', 'Business Analytics', 'Computational Theory', 'Web-Frameworks', 'DevOps'].map((course) => (
                    <span key={course} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    internships: {
      title: 'Internships',
      icon: Briefcase,
      content: (
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-700"></div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -right-2 -top-2">
                <Globe className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold">Web Developer Intern - Ideal Corporate Service</h3>
              <p className="text-gray-500">October 2023 - December 2023</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-purple-500 mt-1" />
                  <p className="text-gray-700">Designed and developed an e-commerce website using React</p>
                </div>
                <div className="flex items-start gap-2">
                  <Server className="w-5 h-5 text-purple-500 mt-1" />
                  <p className="text-gray-700">Integrated responsive layouts and optimized performance</p>
                </div>
                <div className="flex items-start gap-2">
                  <Git className="w-5 h-5 text-purple-500 mt-1" />
                  <p className="text-gray-700">Collaborated with cross-functional teams for seamless deployment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-indigo-700"></div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -right-2 -top-2">
                <Terminal className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold">UI/UX Designer Intern - NP Screens Printing</h3>
              <p className="text-gray-500">May 2024 - June 2024</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-indigo-500 mt-1" />
                  <p className="text-gray-700">Created user-friendly UI/UX designs for web and mobile applications</p>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="w-5 h-5 text-indigo-500 mt-1" />
                  <p className="text-gray-700">Conducted user research to align interfaces with target audience needs</p>
                </div>
                <div className="flex items-start gap-2">
                  <Cpu className="w-5 h-5 text-indigo-500 mt-1" />
                  <p className="text-gray-700">Developed interactive prototypes using Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    projects: {
      title: 'Projects',
      icon: Code,
      content: (
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-700"></div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -right-2 -top-2">
                <Globe className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold">Investment Website | MERN</h3>
              <p className="text-gray-500">November 2024</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Terminal className="w-5 h-5 text-green-500 mt-1" />
                  <p className="text-gray-700">Developed a responsive investment platform with real-time market insights</p>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="w-5 h-5 text-green-500 mt-1" />
                  <p className="text-gray-700">Implemented features for Learning, Stock News, and Practice Play</p>
                </div>
                <div className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-green-500 mt-1" />
                  <p className="text-gray-700">Built reusable UI components ensuring maintainability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-700"></div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -right-2 -top-2">
                <Cpu className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold">Employee Management System | C++</h3>
              <p className="text-gray-500">October 2023 - December 2023</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Terminal className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-700">Developed a robust employee management system using OOP principles</p>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-700">Implemented responsive class structures for scalability</p>
                </div>
                <div className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-700">Integrated file handling and exception management</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-teal-700"></div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -right-2 -top-2">
                <Server className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold">Ayurvedic Medicine Recommendation System | Streamlit, Python</h3>
              <p className="text-gray-500">May 2024 - June 2024</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Terminal className="w-5 h-5 text-teal-500 mt-1" />
                  <p className="text-gray-700">Designed a Streamlit-based Ayurvedic Recommendation System to suggest medicines based on user symptoms using Python and CSV data</p>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="w-5 h-5 text-teal-500 mt-1" />
                  <p className="text-gray-700">Simplified the interface for a improvement in user interaction and achieved a 40% accuracy boost in recommendations</p>
                </div>
                <div className="flex items-start gap-2">
                  <Code className="w-5 h-5 text-teal-500 mt-1" />
                  <p className="text-gray-700">Optimized data processing and algorithms, reducing query response time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    achievements: {
      title: 'Achievements',
      icon: Award,
      content: (
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 to-yellow-700"></div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -right-2 -top-2">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold">Hackathons & Competitions</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Smart India Hackathon 2023 (Pre-Final Round)',
                  'Vashist Hackathon 2024 IITDM (Final Round)',
                  'Hack4Change (Final round)',
                  'Avishkaar Hackathon 2024 (Final Round)'
                ].map((achievement) => (
                  <div key={achievement} className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg">
                    <Terminal className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-700"></div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -right-2 -top-2">
                <Code className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold">Coding Achievements</h3>
              <div className="mt-4 space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Leetcode: Solved 800+ problems</span>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Easy: 625+</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Medium: 50+</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Hard: 5+</span>
                  </div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Skillrack: 100+ Problems Solved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    skills: {
      title: 'Skills',
      icon: Wrench,
      content: (
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-cyan-700"></div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -right-2 -top-2">
                <Terminal className="w-8 h-8 text-cyan-500" />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Code className="w-5 h-5 text-cyan-500" />
                    Languages
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['JAVA', 'SQL', 'Python', 'C++'].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Server className="w-5 h-5 text-cyan-500" />
                    Frameworks
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['React.js', 'Node/Express.js', 'MongoDB', 'Docker'].map((framework) => (
                      <span key={framework} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-cyan-500" />
                    Tools
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Git and GitHub', 'Figma', 'Excel', 'Canva'].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Athish Raswanth.D</h1>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Navigation */}
          <nav className={`md:w-64 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <div className="space-y-2">
              {Object.entries(sections).map(([key, section]) => {
                const Icon = section.icon;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveSection(key);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg text-left ${
                      activeSection === key
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    {section.title}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Content */}
          <main className="flex-1 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">{sections[activeSection].title}</h2>
            {sections[activeSection].content}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
