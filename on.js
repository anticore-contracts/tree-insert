import { on } from 'anticore'
import task from './task.js'

on(
  '.anticore > [data-before], .anticore > [data-after], .anticore > [data-prepend], .anticore > [data-append], .anticore > [data-replace]',
  task
)
