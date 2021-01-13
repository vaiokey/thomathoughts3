import '../styles/global.css'

import {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {ReactElement} from 'react'

export default function App ({Component, pageProps}: AppProps): ReactElement {
  // rome-ignore lint/jsx/noPropSpreading
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
