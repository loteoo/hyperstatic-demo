import { Link } from 'hyperstatic'
import content from './docs.md'

import base from '/styles/base.css'
import utils from '/styles/utils.css'

const DocumentationPage = () => (
  <div key="docs" class={utils.container}>
    <div class={base.markdownContent} innerHTML={content} />
    <Link href="/">Go back to home page</Link>
  </div>
)

export default DocumentationPage
