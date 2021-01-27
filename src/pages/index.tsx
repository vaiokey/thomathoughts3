import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'

import { Layout } from '../components/layout'
import { formatDate } from '../lib/date/formatDate'
import { getSortedPostsData } from '../lib/query'
import { Post } from '../types/post.d'

export interface PagesProps {
  allPostsData: Post[]
}

export default function Index({ allPostsData }: PagesProps): ReactElement {
  return (
    <Layout>
      <Head>
        <title>thomathoughts</title>
      </Head>
      <section>
        <ul className="pl-0">
          {allPostsData.flatMap(({ date, id, tags, title }) => (
            <li className={clsx('mt-10 list-none', 'first:mt-0')} key={id}>
              <Link href={`/posts/${id}`}>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a className={clsx('text-black', 'dark:text-white')}>
                  <h2>{title}</h2>
                  <time dateTime={date}>{formatDate(date)}</time>
                </a>
              </Link>
              <div>
                {tags.flatMap((tag) => (
                  <span className="first:ml-0 ml-5" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<{
  props: {
    allPostsData: Post[]
  }
}> {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
