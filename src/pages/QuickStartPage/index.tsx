import { Link } from 'hyperstatic'
import content from './quick-start.md'

import base from '/styles/base.css'

import utils from '/styles/utils.css'

const QuickStartPage = () => (
  <div key="quickstart" class={utils.container}>
    <div class={base.markdownContent} innerHTML={content} />
    <Link href="/">Go back to home page</Link>
  </div>
)

export default QuickStartPage