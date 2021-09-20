import styled from 'styled-components'
import marked from 'marked'

import 'highlight.js/styles/github.css'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

type MarkdownProps = {
  content: string
}

const ArticleStyled = styled.article``

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ArticleStyled dangerouslySetInnerHTML={{ __html: marked(content) }} />
  )
}
