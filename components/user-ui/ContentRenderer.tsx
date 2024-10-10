import Image from 'next/image'
import React from 'react'
import ReactMarkdown, { Components } from 'react-markdown'

const isHTML = (str: string) => /<[^>]+>/.test(str)

interface ContentRendererProps {
  content: string
}

const MarkdownComponents: Components = {
  h1: ({ children }) => <h1>{children}</h1>,
  h2: ({ children }) => <h2>{children}</h2>,
  h3: ({ children }) => <h3>{children}</h3>,
  p: ({ children }) => <p>{children}</p>,
  pre: ({ children }) => <pre>{children}</pre>,
  code: ({ className, children }) => (
    <code className={className}>{children}</code>
  ),
  ul: ({ children }) => <ul>{children}</ul>,
  ol: ({ children }) => <ol>{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  img: ({ src, alt }) => (
    <Image src={src || ''} alt={alt || ''} className="rounded-lg border" />
  ),
  a: ({ href, children }) => (
    <a href={href} rel="noopener noreferrer">
      {children}
    </a>
  ),
  table: ({ children }) => <table>{children}</table>,
  thead: ({ children }) => <thead>{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => <th>{children}</th>,
  td: ({ children }) => <td>{children}</td>,
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({
  content,
}) => {
  return isHTML(content) ? (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="text-muted-foreground leading-relaxed mb-4"
    />
  ) : (
    <ReactMarkdown components={MarkdownComponents}>{content}</ReactMarkdown>
  )
}
