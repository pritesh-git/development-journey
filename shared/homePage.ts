import { Book, ClipboardList, Hammer, Mail, User } from 'lucide-react'

export const homePageContent = {
  bannerImageSrc: '/home-page-banner.png',
  bannerImageAltText: 'home page banner',
  mainHeading: 'Welcome to DevJourney',
  mainSubheading:
    'A personal portfolio and blog for developers, showcasing my journey, insights, and code snippets. Discover helpful resources for your development journey.',
  ctaButtonText: 'Start Your Journey',
  cardData: [
    {
      icon: Book,
      title: 'Blog',
      redirectionUrl: '/blog',
      description: 'Explore articles on programming concepts and technologies.',
    },
    {
      icon: Hammer,
      title: 'Projects',
      redirectionUrl: '/projects',
      description: 'Explore the projects I’ve worked on and contributed to.',
    },
    {
      icon: ClipboardList,
      title: 'Tech Notes',
      redirectionUrl: '/tech-notes',
      description: 'Read through my technical notes and experiments.',
    },
    {
      icon: User,
      title: 'About Me',
      redirectionUrl: '/about',
      description: 'Get to know more about my professional journey.',
    },
    {
      icon: Mail,
      title: 'Contact',
      redirectionUrl: '/contact',
      description: 'Reach out for collaborations or just a friendly chat.',
    },
  ],
}
