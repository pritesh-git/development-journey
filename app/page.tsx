'use client'

import { Button } from '@/components/ui/button'
import { homePageContent } from '@/shared/homePage'
import { SquareLibrary } from 'lucide-react'
import { NextPage } from 'next'
import Image from 'next/image'
import RedirectionCard from '@/components/user-ui/RedirectionCards'
import { useRef } from 'react'

const Home: NextPage = () => {
  const {
    cardData,
    mainHeading,
    ctaButtonText,
    bannerImageSrc,
    mainSubheading,
    bannerImageAltText,
  } = homePageContent

  const cardSectionRef = useRef<HTMLDivElement>(null)

  const scrollToCards = () => {
    cardSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      <div className="flex justify-center">
        <div className="w-5/6 h-auto flex flex-col p-5 relative">
          <div className="relative sm:h-16 md:h-24 lg:h-28 w-3/4 mb-2 md:mb-4 mt-20 mx-auto">
            <Image
              fill
              src={bannerImageSrc}
              alt={bannerImageAltText}
              className="object-contain rounded-md max-w-5xl mx-auto"
            />
          </div>

          <h1 className="text-center mt-4">{mainHeading}</h1>

          <p className="text-center mt-2">{mainSubheading}</p>

          <div className="mt-8 mx-auto">
            <Button
              size="lg"
              variant="default"
              className="bg-primary-foreground text-primary hover:bg-secondary hover:font-semibold mx-auto"
              onClick={scrollToCards} // Add the click handler here
            >
              {ctaButtonText}
            </Button>
          </div>

          <span className="relative flex justify-center my-20">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75" />
            <span className="relative z-10 px-6">
              <SquareLibrary className="w-5 h-5" />
            </span>
          </span>

          {/* Grid of Section Cards */}
          <div
            ref={cardSectionRef} // Attach the ref to the card section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 text-center">
            {cardData.map((card, index) => (
              <RedirectionCard
                key={index}
                icon={card.icon}
                title={card.title}
                link={card.redirectionUrl}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home

