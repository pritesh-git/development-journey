import React from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const page = () => {
  return (
    <Card className="max-w-2xl mx-auto bg-card text-card-foreground p-8">
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <Avatar className="w-32 h-32">
          <AvatarImage src="/api/placeholder/96/96" alt="Pritesh Singh Bhati" />
          <AvatarFallback>PSB</AvatarFallback>
        </Avatar>

        {/* About Me Section */}
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold">Pritesh Singh Bhati</h2>
          <p className="text-muted-foreground max-w-lg">
            Full-stack developer from India specializing in Next.js and modern
            web technologies. Passionate about creating efficient, scalable
            applications and continuous learning in the ever-evolving tech
            landscape.
          </p>
        </div>

        {/* Current Focus */}
        <div className="text-center space-y-4 w-full">
          <h3 className="text-lg font-semibold">Current Focus</h3>
          <p className="text-muted-foreground">
            Currently focused on Next.js projects, leveraging the full potential
            of React and Node.js to build performant and scalable web
            applications. Actively expanding knowledge in modern development
            practices and cloud technologies.
          </p>
        </div>

        {/* Learning Path */}
        <div className="text-center space-y-4 w-full">
          <h3 className="text-lg font-semibold">Learning Journey</h3>
          <p className="text-muted-foreground">
            Maintaining a structured learning approach through various modules
            covering everything from basic syntax to advanced frameworks.
            Particularly interested in algorithm optimization and database
            structures, while keeping up with the latest in web development
            technologies.
          </p>
        </div>
      </div>
    </Card>
  )
}

export default page
