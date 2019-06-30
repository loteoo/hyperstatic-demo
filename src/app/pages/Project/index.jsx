import markdown from './project.md'

import htmlToVdom from 'hyperapp-site-generator/src/htmlToVdom'

export default () => {
  return (
    <div innerHTML={htmlToVdom(markdown)}></div>
  )
}
