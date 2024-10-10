'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ContentRenderer } from '@/components/user-ui/ContentRenderer'
import { loremMarkdown } from '@/shared/loremPlaceholder'
import { NotebooksData } from '@/shared/techNotesPage'
import { ArrowLeft, ChevronRight, FileText, Menu } from 'lucide-react'
import { NextPage } from 'next'
import { useState } from 'react'

// Define interfaces for our data structure
interface Note {
  id: number
  title: string
  description: string
  tags: string[]
  createdAt: string
  updatedAt: string
  isFavorite?: boolean
}

interface Notebook {
  id: number
  title: string
  description: string
  tags: string[]
  createdAt: string
  updatedAt: string
  subtopics: Note[]
}

interface TechItemProps {
  title: string
  description: string
  tags: string[]
  count: number
  onClick: () => void
}

const TechItem: React.FC<TechItemProps> = ({
  title,
  description,
  tags,
  count,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="flex flex-col bg-secondary p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer w-96 h-32 ">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <FileText className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <span className="text-2xl text-muted-foreground grid grid-cols-2">
        {count}{' '}
        <ChevronRight className="my-auto w-6 h-6 text-muted-foreground" />
      </span>
    </div>
    <p className="text-sm text-gray-600 mb-2 line-clamp-1">{description}</p>
    <div className="flex flex-wrap">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const NotebookPage: NextPage = () => {
  const [selectedNotebook, setSelectedNotebook] = useState<Notebook | null>(
    null,
  )
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false) // State for drawer visibility

  const handleBackClick = (): void => {
    setSelectedNotebook(null)
    setSelectedNote(null)
    setDrawerOpen(false) // Close the drawer when going back
  }

  const handleNoteSelect = (note: Note): void => {
    setSelectedNote(note)
    if (drawerOpen) {
      setDrawerOpen(false) // Close the drawer when selecting a note
    }
  }

  const handleNotebookSelect = (notebook: Notebook): void => {
    setSelectedNotebook(notebook)
    setSelectedNote(notebook?.subtopics[0])
    setDrawerOpen(false)
  }

  // Base container styles for consistent height
  const containerStyles = 'min-h-[90vh] h-[90vh]'

  const renderDrawer = () => (
    <div
      className={`fixed inset-0 bg-card z-50 shadow-lg transition-transform ${
        drawerOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}>
      <div className="p-4">
        <h2 className="text-lg font-semibold mt-2 mb-5">
          {selectedNotebook?.title} Notes
        </h2>
        <div className="space-y-2">
          {selectedNotebook?.subtopics.map(note => (
            <div
              key={note.id}
              onClick={() => handleNoteSelect(note)}
              className="cursor-pointer">
              <p className="text-base font-semibold">{note.title}</p>
              <p className="text-xs text-muted-foreground mb-1">
                Created At: {new Date(note.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  if (!selectedNotebook) {
    return (
      <div className={`w-5/6 flex flex-wrap justify-center gap-x-8 gap-y-14  mx-auto py-10`}>
        {NotebooksData.map((notebook, key) => (
          <TechItem
            key={key}
            title={notebook.title}
            description={notebook.description}
            tags={notebook.tags}
            count={notebook.subtopics.length}
            onClick={() =>
              handleNotebookSelect(notebook as unknown as Notebook)
            }
          />
        ))}
      </div>
    )
  }

  return (
    <div className={`mx-auto w-11/12 pb-10 ${containerStyles}`}>
      {renderDrawer()}
      <div className="mb-4 flex justify-between">
        <Button
          onClick={handleBackClick}
          variant="ghost"
          className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Notebooks
        </Button>
        {selectedNotebook && (
          <Button
            variant={'secondary'}
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        )}
      </div>
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="hidden md:block w-1/4 bg-muted p-4 overflow-y-auto border-l rounded-l-lg border-border h-full">
          <ScrollArea className="h-full p-2">
            <h2 className="text-lg font-bold mb-4">
              {selectedNotebook.title} Notes
            </h2>
            <ul className="list-none mx-0">
              {selectedNotebook.subtopics?.map((note: Note) => (
                <li
                  key={note.id}
                  onClick={() => handleNoteSelect(note)}
                  className="cursor-pointer mb-4 transition-transform transform hover:scale-105">
                  <Card
                    className={`bg-card shadow-sm border border-border rounded-lg transition-colors hover:bg-primary-foreground ${
                      selectedNote?.id === note.id
                        ? 'border border-primary'
                        : ''
                    }`}>
                    <CardContent>
                      <h3 className="text-lg font-semibold">{note.title}</h3>
                      <p className="text-xs text-muted-foreground mb-1">
                        Created At:{' '}
                        {new Date(note.createdAt).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-700 truncate">
                        {note.description}
                      </p>
                      <div className="flex flex-wrap mt-2">
                        {note.tags?.map((tag: string, idx: number) => (
                          <Button
                            key={idx}
                            size="sm"
                            variant="outline"
                            className="mr-1 mb-1">
                            {tag}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>

        {/* Note Detail */}
        <div className="w-full md:w-3/4 border rounded-r-lg bg-card h-full">
          {selectedNote ? (
            <ScrollArea className="h-full p-2">
              <Card className="p-4 bg-card text-card-foreground border-0">
                <CardHeader className="border-b">
                  <CardTitle className="text-foreground text-xl font-bold">
                    {selectedNote.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Created At:{' '}
                    {new Date(selectedNote.createdAt).toLocaleDateString()} |
                    Updated At:{' '}
                    {new Date(selectedNote.updatedAt).toLocaleDateString()}
                  </p>
                </CardHeader>
                <CardContent>
                  {selectedNote.description}
                  <ContentRenderer content={loremMarkdown} />
                </CardContent>
              </Card>
            </ScrollArea>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Select a note to view details
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NotebookPage
