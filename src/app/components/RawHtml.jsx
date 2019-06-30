
import htmlToVdom from 'hyperapp-site-generator/src/htmlToVdom'

export default (props, children) => (
  <div {...props}>
    {htmlToVdom(`<div>${children}</div>`)}
  </div>
)
