import { htmlToVdom } from 'hyperstatic/src/htmlToVdom'
import markdown from './project.md'

export default () => htmlToVdom(markdown)
