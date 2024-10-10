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
      <div className="border border-muted-foreground p-1.5 h-auto rounded-lg cursor-pointer transform transition-transform hover:scale-105 duration-300 ease-in-out">
        <div className="p-5 rounded-md bg-card h-48 overflow-hidden">
          <Icon className="w-10 h-10 mb-4 text-primary mx-auto transition-transform duration-300 transform group-hover:scale-125" />
          <h3 className="lg:text-2xl xl:text-3xl transition-transform duration-300 ease-in-out group-hover:scale-110">
            {title}
          </h3>
          <p className="transition-colors duration-300 group-hover:text-primary-foreground">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default RedirectionCard
