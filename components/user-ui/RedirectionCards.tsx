import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface CardProps {
  icon: LucideIcon
  link: string
  title: string
  description: string
}

const RedirectionCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  link,
}) => {
  return (
    <Link href={link}>
      <div className="border border-muted-background p-4 h-52 rounded-lg cursor-pointer transform transition-transform hover:scale-105 duration-300 ease-in-out bg-card shadow-md shadow-muted-foreground overflow-hidden">
          <Icon className="w-8 h-8 mb-4 text-primary mx-auto transition-transform duration-300 transform group-hover:scale-125" />
          <h3 className="lg:text-xl xl:text-2xl transition-transform duration-300 ease-in-out group-hover:scale-110">
            {title}
          </h3>
          <p className="transition-colors duration-300 group-hover:text-primary-foreground leading-relaxed">
            {description}
          </p>
      </div>
    </Link>
  )
}

export default RedirectionCard
