import { when } from 'anticore'

when(
  '.anticore > [data-before], .anticore > [data-after], .anticore > [data-prepend], .anticore > [data-append], .anticore > [data-replace]',
  import.meta,
  './task.js'
)
