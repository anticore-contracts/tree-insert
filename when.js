import { when } from 'anticore'

when(
  '.anticore > [data-before], .anticore > [data-after]',
  import.meta,
  './task.js'
)
