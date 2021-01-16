import fs from 'fs'
import grayMatter from 'gray-matter'
import path from 'path'
import remark from 'remark'

import { PostData } from '../../types/post.d'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}/${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { content, data } = grayMatter(fileContents)

  const processedContent = await remark().process(content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    title: data.title,
    date: data.date,
    tags: data.tags.split(','),
  }
}
