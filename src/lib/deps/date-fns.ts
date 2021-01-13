import {format as _format, parseISO as _parseISO} from 'date-fns'

import {DateFormat} from '../../types/date.d'

export function format (
  date: Date,
  format: string,
  options?: {
    firstWeekContainsDate?: number | undefined
    locale?: globalThis.Locale | undefined
    useAdditionalDayOfYearTokens?: boolean | undefined
    useAdditionalWeekYearTokens?: boolean | undefined
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined
  },
): string {
  return _format(date, format, options)
}

export function parseISO (
  argument: DateFormat,
  options?: {
    additionalDigits?: 0 | 1 | 2 | undefined
  },
): Date {
  return _parseISO(argument, options)
}
