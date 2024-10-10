export const typographyConstant = {
  // Headings
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-6',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight mb-4',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight mb-4',
  h5: 'scroll-m-20 text-lg font-semibold tracking-tight mb-4',
  h6: 'scroll-m-20 text-base font-semibold tracking-tight mb-4',

  // Paragraph and text elements
  p: 'leading-7 [&:not(:first-child)]:mt-6 text-base text-muted-foreground mb-4',
  strong: 'font-medium',
  em: 'italic',

  // Lists
  ul: 'my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground',
  ol: 'my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground',
  li: 'leading-7',

  // Blockquotes
  blockquote: 'mt-6 border-l-2 pl-6 italic text-muted-foreground',

  // Code blocks
  pre: 'p-4 rounded-lg mb-4 overflow-x-auto bg-muted font-mono text-sm',
  code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
  inlineCode:
    'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',

  // Links
  a: 'font-medium text-primary underline underline-offset-4 hover:text-primary/80',

  // Images
  img: 'rounded-lg border my-6 max-w-full h-auto',

  // Tables
  table: 'w-full my-6 border-collapse text-sm',
  th: 'border px-4 py-2 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right bg-muted',
  td: 'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',

  // Horizontal rule
  hr: 'my-4 border-muted',

  // Special text styles
  lead: 'text-xl text-muted-foreground',
  large: 'text-xl text-muted-foreground',
  small: 'text-sm font-medium leading-none',
  muted: 'text-sm text-muted-foreground',
}