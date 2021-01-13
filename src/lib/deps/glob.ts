import {IOptions as _IOptions, sync as _sync} from 'glob'

export function glob (pattern: string, options?: _IOptions): string[] {
  return _sync(pattern, options)
}
