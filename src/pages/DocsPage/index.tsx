import { htmlToVdom, Link } from 'hyperstatic'
import { html } from './content.md'

import base from '/src/styles/base.module.css'

const ReferencePage = () => (
  <div key="docs">
    <div class={base.markdownContent}>
      <div>
        {htmlToVdom(html)}
      </div>
    </div>
    <Link href="/">Go back to home page</Link>
  </div>
)

export default ReferencePage
