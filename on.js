import { on } from 'anticore'
import task from './task.js'

on(
  '.anticore > [data-before], .anticore > [data-after]',
  task
)
