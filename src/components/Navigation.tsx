import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#leadership', text: 'Leadership' },
    { href: '#certifications', text: 'Certifications' },
    { href: '#publications', text: 'Publications' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" className="text-xl font-bold">TSMG</a>
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-blue-200">
            {link.text}
          </a>
        ))}
      </div>
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ChevronDown />
      </button>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-700 z-50">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-200">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}