'use client'

import { Button } from '@/components/ui/button'
import RedirectionCard from '@/components/user-ui/RedirectionCards'
import { homePageContent } from '@/shared/homePage'
import { SquareLibrary } from 'lucide-react'
import { NextPage } from 'next'
import Image from 'next/image'
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

            <h1 className="text-4xl font-extrabold mb-4 text-center drop-shadow-md shadow-gray-300 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text dark:from-gray-100 dark:via-gray-300 dark:to-gray-100">
            {mainHeading}
            </h1>
            <p className="text-lg text-center mb-8 drop-shadow-sm shadow-gray-200 text-gray-700 bg-white/80 px-4 py-2 rounded-md dark:text-gray-200 dark:bg-transparent">
            {mainSubheading}
            </p>

          <div className="mt-8 mx-auto">
            <Button
              size="lg"
              variant="default"
              className={`
                group
                mx-auto
                px-8
                py-3
                rounded-xl
                font-bold
                transition-all
                duration-300
                bg-gradient-to-r
                from-gray-300 via-gray-400 to-gray-500
                text-gray-900
                border
                border-gray-200
                shadow-lg
                hover:scale-105
                hover:shadow-2xl
                hover:border-gray-100
                hover:bg-gradient-to-l
                focus:outline-none
                focus:ring-2
                focus:ring-gray-300
                focus:ring-offset-2
                dark:from-gray-700 dark:via-gray-800 dark:to-gray-900
                dark:text-gray-100
                dark:border-gray-500
                dark:hover:border-gray-300
              `}
              onClick={scrollToCards}
            >
              <span
                className="
                  relative z-10
                  transition-all duration-300
                  group-hover:tracking-wider
                  group-hover:text-gray-700
                  dark:group-hover:text-white
                  group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                "
              >
                {ctaButtonText}
              </span>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8 text-center">
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
