import '../styles/global.css'

import {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {ReactElement} from 'react'

export default function App ({Component, pageProps}: AppProps): ReactElement {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
