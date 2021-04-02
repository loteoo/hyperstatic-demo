import { Link } from 'hyperstatic'
import content from './content.md'

import base from '/styles/base.css'

const ReferencePage = () => (
  <div key="docs">
    <div class={base.markdownContent} innerHTML={content} />
    <Link href="/">Go back to home page</Link>
  </div>
)

export default ReferencePage
