import Head from 'next/head'
import Link from 'next/link'
import {ReactElement, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'

import {Layout} from '../../components/layout'
import {formatDate} from '../../lib/date'
import {getAllPostIds, GetAllPostIdsReturn, getPostData} from '../../lib/query'
import {PostData} from '../../types/post.d'

export interface PostProps {
  postData: PostData
}

export default function Post ({postData}: PostProps): ReactElement {
  useEffect(
    () => {
      if (typeof document !== 'undefined') {
        const elements = document.querySelectorAll('#__next * a')
        const elementsLength = elements.length - 1
        for (let i = 1; i < elementsLength; i = i + 1 | 0) {
          if (elements[i].getAttribute('href')?.startsWith?.('#') !== undefined) {
            continue
          } else {
            elements[i].setAttribute('target', '_blank')
          }
        }
      }
    },
    [],
  )

  // rome-ignore lint/jsx-a11y/useValidAnchor
  return (
    <Layout home>
      <Head>
        <title>
          {postData.title}
          - thomathoughts
        </title>
      </Head>
      <article id={postData.id}>
        <h2>
          {postData.title}
        </h2>
        <time dateTime={postData.date}>
          {formatDate(postData.date)}
        </time>
        <div>
          {postData.tags.flatMap((tag) =>
            <span className="ml-5 first:ml-0">
              {tag}
            </span>
          )}
        </div>
        <div className="my-12">
          <ReactMarkdown allowDangerousHtml>
            {postData.contentHtml}
          </ReactMarkdown>
        </div>
      </article>
      <div className="flex flex-col">
        <Link href={`https://github.com/tkeiyama/thomathoughts/blob/main/posts/${postData.id}/${postData.id}.md`}>
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a>
            Edit this post on GitHub.
          </a>
        </Link>
        <Link href="/">
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a>
            Back to top
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export interface GetStaticPathsReturn {
  fallback: boolean
  paths: GetAllPostIdsReturn
}

export async function getStaticPaths (): Promise<{
  fallback: boolean
  paths: GetAllPostIdsReturn[]
}> {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
export interface GetStaticProps {
  params: PostData
}

export interface GetStaticPropsReturn {
  props: {
    postData: PostData
  }
}

export async function getStaticProps (
  {params}: GetStaticProps,
): Promise<GetStaticPropsReturn> {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
