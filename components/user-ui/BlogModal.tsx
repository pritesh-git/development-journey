import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { format } from 'date-fns'
import Image from 'next/image'
import React from 'react'
import { ContentRenderer } from './ContentRenderer'

interface Blog {
  id: string
  title: string
  content: string
  blogCover: string
  blogIcon: string
  createdAt: string
  updatedAt: string
}

interface BlogModalProps {
  content: Blog | null
  isOpen: boolean
  onClose: () => void
}

export const BlogModal: React.FC<BlogModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  if (!content) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[90vh] p-0">
        <div className="relative">
          <div className="relative h-48 w-full">
            <Image
              fill
              alt="Blog cover"
              src={content.blogCover}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </div>

          {/* Content */}
          <div className="relative -mt-24 px-8 pb-6">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-12 w-12 ring-4 ring-white">
                  <AvatarImage src={content.blogIcon} />
                </Avatar>
                <div className="text-foreground">
                  <DialogTitle className="text-2xl font-bold mb-1">
                    {content.title}
                  </DialogTitle>
                  <div className="text-sm opacity-90">
                    {format(new Date(content.updatedAt), 'MMMM d, yyyy h:mm a')}
                  </div>
                </div>
              </div>
            </DialogHeader>

            <ScrollArea className="h-[calc(90vh-280px)] mt-6">
              <div className="pr-4">
                <ContentRenderer content={content.content} />
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
