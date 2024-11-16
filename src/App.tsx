import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { SocialLinks } from './components/SocialLinks';
import { ExternalLink, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const certifications = [
    {
      title: "AWS Data Engineering",
      icon: "aws",
    },
    {
      title: "Google Cloud Skills Boost Gen AI",
      icon: "google",
    },
    {
      title: "Microchip - Embedded Systems",
      icon: "chip",
    },
    {
      title: "Python Basics - Infosys Springboard",
      icon: "python",
    },
    {
      title: "Python Essentials - Cisco Skills for all",
      icon: "cisco",
    },
    {
      title: "JavaScript Essentials - Cisco Skills for all",
      icon: "js",
    },
    {
      title: "Computer Hardware Basics - Cisco Skills for all",
      icon: "hardware",
    },
    {
      title: "Power BI by PwC - Forage",
      icon: "powerbi",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Maruthi Ganesh</h1>
            <p className="text-xl md:text-2xl mb-6">Engineer | AI Enthusiast | Problem Solver | Leader</p>
            <p className="text-lg mb-8">"Building solutions for a smarter tomorrow"</p>
            <div className="flex space-x-4">
              <SocialLinks iconSize={24} />
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
              alt="Professional workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              As an Electronics and Communication Engineering undergraduate at Sreenidhi Institute of Science and Technology,
              I'm passionate about pushing the boundaries of technology through AI, machine learning, and data analytics.
            </p>
            <p className="text-lg mb-6">
              My academic journey has been marked by a deep interest in artificial intelligence and its applications,
              particularly in agriculture and sustainable solutions. I believe in the power of technology to transform
              traditional practices and create meaningful impact.
            </p>
            <p className="text-lg">
              Beyond technical skills, I'm an active leader in the IEEE community and have led teams in various hackathons,
              including Hackwave and IEEE Xtreme. I thrive on collaboration and continuous learning, always seeking new
              challenges and opportunities to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">AuctionAlley</h3>
              <p className="mb-4">A sophisticated bidding platform enabling dynamic trading between buyers and sellers. Built with Flask backend for robust performance and real-time updates.</p>
              <div className="flex items-center text-blue-600">
                <ExternalLink size={20} className="mr-2" />
                <span>View Project</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Customer Profile Page</h3>
              <p className="mb-4">Designed and implemented a user-centric profile system for an e-commerce platform, focusing on intuitive navigation and seamless user experience.</p>
              <div className="flex items-center text-blue-600">
                <ExternalLink size={20} className="mr-2" />
                <span>View Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership & Activities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">IEEE Xtreme Leader</h3>
              <p>Led team participation in the global programming competition, demonstrating strong problem-solving and leadership skills.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">IEEE Hyderabad Section</h3>
              <p>Active member of the Student Network team, coordinating and organizing events across multiple colleges.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Hackwave Champion</h3>
              <p>Led a successful team with Vasundara and Revanth, showcasing innovative solutions and teamwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
                <Award className="text-blue-600 flex-shrink-0" size={24} />
                <h3 className="font-semibold">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Publications & Research</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">Upcoming Book Chapter</h3>
            <p className="text-lg mb-4">
              "Harnessing Generative AI in the Evolution of Agriculture: From Conventional Practices to Precision-Driven Intelligent Farming"
            </p>
            <p className="text-gray-600">
              A comprehensive exploration of how generative AI is revolutionizing agricultural practices,
              bridging the gap between traditional farming and modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Maruthi Ganesh</h3>
              <p className="mt-2">Building solutions for a smarter tomorrow</p>
            </div>
            <SocialLinks />
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Maruthi Ganesh. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;