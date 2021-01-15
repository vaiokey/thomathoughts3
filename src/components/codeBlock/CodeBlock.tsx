import { ReactElement } from 'react'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { CodeBlockProps } from './CodeBlock.interfaces'

export function CodeBlock({ language, value }: CodeBlockProps): ReactElement {
  return (
    <Prism language={language} style={dracula}>
      {value}
    </Prism>
  )
}
