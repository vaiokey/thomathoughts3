import fs from 'fs'
import grayMatter from 'gray-matter'
import path from 'path'
import remark from 'remark'

import { PostData } from '../../types/post.d'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}/${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = grayMatter(fileContents)

  const processedContent = await remark().process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    tags: matterResult.data.tags.split(','),
  }
}
