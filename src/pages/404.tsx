import Head from 'next/head'
import fetch from 'node-fetch'
import React, { ReactElement, useEffect, useState } from 'react'

import { Layout } from '../components/layout'

export default function ErrorPage(): ReactElement {
  const [feedback, setFeedback] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    const url = window.location.href
    setUrl(url)
  }, [])

  function handleSetFeedback(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    e.persist()
    const { value } = e.target
    setFeedback(value)
  }

  function handleResponse(): void {
    setFeedback('')
  }

  async function handleOnSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault()
    const message = `ERROR PAGE > ${url}

${feedback}`
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    await handleResponse()
  }

  return (
    <Layout>
      <Head>
        <title>PAGE NOT FOUND - thomathoughts</title>
      </Head>
      <div>
        <h2>OOPS! Page is not found ;(</h2>
        <p>
          If you think this page should be existed, please send me an feedback.
        </p>
        <p>Thanks :&apos;)</p>
        <form onSubmit={handleOnSubmit}>
          <p>
            The Current URL:
            {url}
          </p>
          <textarea
            className="w-full h-40 text-black outline-black dark:outline-white"
            onChange={handleSetFeedback}
            value={feedback}
          />
          <button
            className="block ml-auto mr-5 mt-4 p-3 w-32 bg-brand rounded-xl"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  )
}
