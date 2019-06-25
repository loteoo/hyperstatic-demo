import htmlToVdom from 'hyperapp-site-generator/src/htmlToVdom'
import markdown from './home.md'

export default () => (
  <div>{htmlToVdom(markdown)}</div>
)
