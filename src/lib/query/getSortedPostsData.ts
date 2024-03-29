import fs from 'fs'
import grayMatter from 'gray-matter'

import { Post } from '../../types/post.d'
import { glob } from '../deps/glob'

export function getSortedPostsData(): Post[] {
  const fileNames = glob('posts/**/*.md', { absolute: true })
  const allPostsData = fileNames.map(
    (fileName): Post => {
      const slashLastIndex = fileName.lastIndexOf('/')
      const id = fileName.slice(slashLastIndex + 1).replace(/\.md$/, '')

      const fileContents = fs.readFileSync(fileName, 'utf8')

      const { data } = grayMatter(fileContents)

      return {
        id,
        title: data.title,
        date: data.date,
        tags: data.tags.split(','),
      }
    },
  )
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
