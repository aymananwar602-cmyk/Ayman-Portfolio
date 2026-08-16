import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ElementType;
};

export type ContactInfo = {
  email: string;
  phone: string;
  location: string;
  icons: {
    email: React.ElementType;
    phone: React.ElementType;
    location: React.ElementType;
  };
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/aymananwar602-cmyk", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ayman-anwar-653618310/", icon: FaLinkedin },
];

export const contactInfo: ContactInfo = {
  email: "aymananwar602@gmail.com",
  phone: "+201145943753",
  location: "Egypt, Giza",
  icons: {
    email: Mail,
    phone: Phone,
    location: MapPin,
  },
};
