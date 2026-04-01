export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  links?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Rayyan Shaheer",
    role: "Captain",
    image: "/team/rayyan.jpg",
    bio: "Leading with confidence and purpose, driving the club's vision forward with strategic thinking and a commitment to teamwork.",
    links: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Abdul Raheem",
    role: "Vice Captain",
    image: "/team/raheem.jpg",
    bio: "Supporting the vision and strengthening execution with reliability, dedication, and a collaborative mindset.",
    links: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Syed Khadeen",
    role: "Executive Director",
    image: "/team/khadeen.jpg",
    bio: "Driving strategy with precision and purpose, overseeing operations to ensure every initiative aligns with the club's vision.",
    links: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Muhammad Aais Rabbani",
    role: "Technical Advisor",
    image: "/team/aais.jpg",
    bio: "Guiding innovation with expertise and insight, providing direction and clarity on complex technical challenges.",
    links: {
      linkedin: "#",
      github: "#",
    },
  },
];
