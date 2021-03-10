import { Link } from 'hyperstatic'
import content from './reference.md'

import base from '/styles/base.css'
import utils from '/styles/utils.css'

const ReferencePage = () => (
  <div key="docs" class={utils.container}>
    <div class={base.markdownContent} innerHTML={content} />
    <Link href="/">Go back to home page</Link>
  </div>
)

export default ReferencePage
