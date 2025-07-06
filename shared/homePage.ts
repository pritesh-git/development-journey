import { Book, ClipboardList, Hammer, Mail, User } from 'lucide-react'

export const homePageContent = {
  bannerImageSrc: '/home-page-banner.png',
  bannerImageAltText: 'home page banner',
  mainHeading: 'Welcome to DevJourney – A Developer’s Story',
  mainSubheading:
    '🧭 DevJourney is more than just a portfolio — it’s a living archive of my evolution as a developer. Here, I document what I build, what I break, and what I learn along the way. Whether you’re a fellow developer looking for inspiration, a recruiter exploring my work, or a curious mind seeking insight into the world of coding — you’re in the right place. Dive into blog posts covering real-world tech challenges, explore hands-on projects, skim through bite-sized code notes, and get a glimpse of who I am beyond the screen. Welcome to my journey in tech — raw, real, and ever-growing.',
  ctaButtonText: 'Start Your Journey',
  cardData: [
    {
      icon: Book,
      title: 'Tech Blog & Insights',
      redirectionUrl: '/blog',
      description: '✍️ Dive into detailed articles on programming principles, modern tech stacks, industry trends, and developer productivity.',
    },
    {
      icon: Hammer,
      title: 'Projects & Contributions',
      redirectionUrl: '/projects',
      description: '🚀 Showcasing personal and collaborative projects — from problem-solving scripts to full-scale applications.',
    },
    {
      icon: ClipboardList,
      title: 'Code Notes & Experiments',
      redirectionUrl: '/tech-notes',
      description: '🧪 A space for raw ideas, dev tips, micro-learnings, and coding experiments that didn’t make it to the blog.',
    },
    {
      icon: User,
      title: 'About the Developer',
      redirectionUrl: '/about',
      description: '🎯 Discover my background, technical journey, core skills, and what drives me in the world of software development.',
    },
    {
      icon: Mail,
      title: 'Let’s Connect',
      redirectionUrl: '/contact',
      description: '🤝 Interested in collaborating, hiring, or just exchanging ideas? Feel free to reach out — I’d love to chat.',
    },
  ],
}
