import { Link } from 'hyperstatic'
import content from './concepts.md'

import base from '/styles/base.css'

const MainConceptsPage = () => (
  <div key="concepts">
    <div class={base.markdownContent} innerHTML={content} />
    <Link href="/">Go back to home page</Link>
  </div>
)

export default MainConceptsPage
