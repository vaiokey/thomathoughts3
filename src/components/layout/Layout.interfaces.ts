import {ReactNode} from 'react'

export interface LayoutProps {
  /**
	 * @description The content of a page.
	 */
  children: ReactNode
  /**
	 * @description Whether a page is home.
	 * @default false
	 */
  home?: boolean
}
