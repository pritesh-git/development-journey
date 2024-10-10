'use client'

import { BlogModal } from '@/components/user-ui/BlogModal'
import { blogsData } from '@/shared/blogPage'
import { SquareLibrary } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Blog {
  id: string
  title: string
  content: string
  blogCover: string
  blogIcon: string
  createdAt: string
  updatedAt: string
}

const Page = () => {
  const { mainContent, blogs } = blogsData

  // Define the state for the modal action
  const [blogModalAction, setBlogModalAction] = useState<{
    visibility: boolean
    content: Blog | null
  }>({ visibility: false, content: null })

  // Function to handle opening the modal with the card data
  const handleCardClick = (content: Blog) => {
    setBlogModalAction({ visibility: true, content })
  }

  // Function to handle closing the modal
  const handleModalClose = () => {
    setBlogModalAction({ visibility: false, content: null })
  }

  return (
    <div className="w-5/6 mx-auto p-10">
      <div className="max-w-7xl flex flex-col mx-auto shadow-lg gap-3">
        <h1 className="text-center mx-auto">{mainContent.title}</h1>
        <p className="text-center mx-auto max-w-6xl">{mainContent.description}</p>
      </div>
      <span className="relative flex justify-center my-20">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75" />
        <span className="relative z-10 px-6">
          <SquareLibrary className="w-5 h-5" />
        </span>
      </span>

      <div className="flex flex-wrap justify-evenly gap-8 mx-auto">
        {blogs.map((val, i) => (
          <div
            key={val.title + '-' + i}
            className="relative w-80 h-56 bg-card text-card-foreground rounded-lg overflow-hidden shadow-sm shadow-card-foreground group cursor-pointer"
            onClick={() => handleCardClick(val)}>
            <div
              className="h-3/5 bg-cover bg-center transition-all duration-300 group-hover:blur-md"
              style={{ backgroundImage: `url(${val.blogCover})` }}
            />

            <div className="absolute top-3/5 -mt-5 left-6">
              <Image
                src={val.blogIcon}
                alt="Icon"
                width={200}
                height={100}
                className="w-12 h-12 rounded-full"
              />
            </div>

            <div className="absolute p-4 left-16 top-32 -mt-2">
              <h1 className="text-base font-semibold text-primary line-clamp-2">
                {val.title}
              </h1>
              <p className="text-xs text-muted">{val.updatedAt}</p>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
              <p className="text-white text-xl m-0">{mainContent.readMore}</p>
            </div>
          </div>
        ))}
      </div>

      <BlogModal
        content={blogModalAction?.content}
        isOpen={blogModalAction?.visibility}
        onClose={handleModalClose}
      />
    </div>
  )
}

export default Page
