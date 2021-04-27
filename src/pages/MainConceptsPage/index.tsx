import { htmlToVdom, Link } from 'hyperstatic'
import { html } from './concepts.md'

import base from '/src/styles/base.module.css'

const MainConceptsPage = () => (
  <div key="concepts">
    <div class={base.markdownContent}>
      {htmlToVdom(html)}
    </div>
    <Link href="/">Go back to home page</Link>
  </div>
)

export default MainConceptsPage
