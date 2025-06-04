// components/AuthorCard.jsx

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'; // or your preferred icon set

const socialLinks = [
  {
    href: 'https://github.com',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com',
    icon: Twitter,
    label: 'Twitter',
  },
  {
    href: 'mailto:soumyamanna729@gmail.com',
    icon: Mail,
    label: 'Email',
  },
];

const AuthorCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
      <Image
        src="/images/soumya-manna.webp"
        alt="Soumya Manna"
        width={56}
        height={56}
        className="rounded-full object-cover h-20 w-20"
      />
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-sans font-medium text-white">
          Soumya Manna
        </h2>
        <p className="text-gray-500">Software Developer</p>
        <div className="mt-4 flex justify-center md:justify-start space-x-4 footer-socials">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                <Icon className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
