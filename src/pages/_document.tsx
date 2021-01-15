import clsx from 'clsx'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ReactElement } from 'react'

export default class NextDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): ReactElement {
    return (
      <Html>
        <Head />
        <body
          className={clsx(
            'text-black dark:text-white dark:bg-dark-not-black bg-white',
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
