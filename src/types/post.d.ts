import { DateFormat } from './date.d'

export interface Post {
  date: DateFormat
  id: string
  tags: string[]
  title: string
}

export interface PostData extends Post {
  contentHtml: string
}
