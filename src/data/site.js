export const SITE = {
  name: "Saloni",
  fullName: "Saloni Sonawane",
  tagline: "I'm a Frontend Developer & Designer from Pune.",
  phone: "+91 70573 91783",
  email: "salonichandrakant2000@gmail.com",
  city: "Pune , Maharashtra",
  address: "Bibvewadi ,Pune - 411037",
  website: "salonisonawane.vercel.app",
  resumeUrl: "/SaloniSonawane-WebDeveloperResume.pdf",
  // Public Web3Forms key (same one the original site used). Override with VITE_WEB3FORMS_KEY in .env if you rotate it.
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || "c5e8f87c-7e48-4d04-8e9f-0359af6bacb5",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.639210524931!2d73.86133813849924!3d18.46782083973605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eabc34f96035%3A0xe1634c338f5cdf33!2sLower%20Indira%20Nagar%2C%20Bibwewadi%2C%20Pune%2C%20Maharashtra%20411037%2C%20India!5e1!3m2!1sen!2sus!4v1736252755414!5m2!1sen!2sus",
};

export const SOCIALS = [
  { icon: "bi-github", href: "https://github.com/saloni27062000", label: "GitHub" },
  { icon: "bi-whatsapp", href: "https://wa.me/7057391783", label: "WhatsApp" },
  { icon: "bi-linkedin", href: "https://www.linkedin.com/in/saloni-chandrakant-sonawane-5933431b3/", label: "LinkedIn" },
];

export const NAV = [
  { to: "/", label: "Home", title: "SaloniPortfolio - Home" },
  { to: "/about", label: "About", title: "SaloniPortfolio - About" },
  { to: "/resume", label: "Resume", title: "SaloniPortfolio - Resume" },
  { to: "/services", label: "Services", title: "SaloniPortfolio - Services" },
  { to: "/portfolio", label: "Portfolio", title: "SaloniPortfolio - Portfolio" },
  { to: "/contact", label: "Contact", title: "SaloniPortfolio - Contact" },
];
