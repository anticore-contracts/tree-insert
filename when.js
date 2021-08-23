import { when } from 'anticore'

when(
  '.anticore > [data-before], .anticore > [data-after], .anticore > [data-instead]',
  import.meta,
  './task.js'
)
