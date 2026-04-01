export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "The Silicon Valley Workflow",
    description:
      "A comprehensive 5-week Zero-to-Production workshop series covering Linux, Git, Python, FastAPI, AWS IAM, Docker, CI/CD, and EC2 deployment.",
    techStack: ["Python", "FastAPI", "AWS EC2", "Docker", "Linux", "Git"],
    github: "https://github.com/awsccfastpwr/The-Silicon-Vally-WorkFlow---Workshop",
  },
  {
    title: "Cloud Club Website",
    description:
      "The official website for AWS Cloud Club FAST Peshawar — built with Next.js, Tailwind CSS, and Framer Motion.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/awsccfastpwr/awsccfastpwr.github.io",
    demo: "https://awsccfastpwr.github.io",
  },
  {
    title: "Serverless REST API",
    description:
      "A cloud-native REST API built with AWS Lambda, API Gateway, and DynamoDB, showcasing serverless architecture patterns.",
    techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "Python"],
  },
  {
    title: "Cloud Cost Optimizer",
    description:
      "An automated tool that analyzes AWS resource usage and recommends cost-saving strategies using CloudWatch metrics.",
    techStack: ["AWS CloudWatch", "Python", "Boto3", "S3"],
  },
];
