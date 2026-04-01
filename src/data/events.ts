export interface Event {
  title: string;
  date: string;
  description: string;
  type: "workshop" | "hackathon" | "meetup" | "talk" | "orientation";
  status: "upcoming" | "past";
  location?: string;
  image?: string;
}

export const events: Event[] = [
  {
    title: "Byte بیٹھک — Cloud Edition",
    date: "2026-04-15",
    description:
      "A collaborative space full of learning, tech conversations, and cloud exploration. Connect with fellow cloud enthusiasts and build something amazing.",
    type: "meetup",
    status: "upcoming",
    location: "FAST NUCES Peshawar",
  },
  {
    title: "Silicon Valley Workflow — Week 5: Production Launch on EC2",
    date: "2026-04-10",
    description:
      "The grand finale of our 5-week journey. Deploy your full-stack application to AWS EC2 and go live with production-ready infrastructure.",
    type: "workshop",
    status: "upcoming",
    location: "FAST NUCES Lab",
  },
  {
    title: "Silicon Valley Workflow — Week 4: Docker & CI/CD",
    date: "2026-04-03",
    description:
      "Containerize your applications with Docker and set up automated CI/CD pipelines for seamless deployments.",
    type: "workshop",
    status: "past",
    location: "FAST NUCES Lab",
  },
  {
    title: "Silicon Valley Workflow — Week 3: AWS Security & IAM",
    date: "2026-03-27",
    description:
      "Deep dive into AWS Identity and Access Management, security best practices, and securing your cloud infrastructure.",
    type: "workshop",
    status: "past",
    location: "FAST NUCES Lab",
  },
  {
    title: "Silicon Valley Workflow — Week 2: Python & FastAPI",
    date: "2026-03-20",
    description:
      "Build high-performance APIs with Python and FastAPI. Learn backend fundamentals and how modern applications communicate through APIs.",
    type: "workshop",
    status: "past",
    location: "FAST NUCES Lab",
  },
  {
    title: "Silicon Valley Workflow — Week 1: Linux & Git",
    date: "2026-03-13",
    description:
      "Kickoff of our Zero-to-Production workshop series. Master the Linux environment and Git version control — the essential developer tools.",
    type: "workshop",
    status: "past",
    location: "FAST NUCES Lab",
  },
  {
    title: "Orientation 2025",
    date: "2025-09-15",
    description:
      "Welcome session for new members. Learn about the club's mission, upcoming activities, and how to get involved.",
    type: "orientation",
    status: "past",
    location: "FAST NUCES Peshawar",
  },
];
