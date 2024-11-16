import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { ThreadsIcon } from './ThreadsIcon';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className = '', iconSize = 24 }: SocialLinksProps) {
  const socialLinks = [
    {
      href: 'https://github.com/Maruthi1205',
      icon: Github,
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/maruthi-ganesh-929988258/',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://www.instagram.com/tsmg_125/',
      icon: Instagram,
      label: 'Instagram'
    },
    {
      href: 'https://www.threads.net/@tsmg_125',
      icon: ThreadsIcon,
      label: 'Threads'
    }
  ];

  return (
    <div className={`flex space-x-6 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-200 transition-colors"
          aria-label={link.label}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}