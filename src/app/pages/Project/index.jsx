import htmlToVdom from 'hyperapp-site-generator/src/htmlToVdom'
import markdown from './project.md'

export default () => htmlToVdom(markdown)
