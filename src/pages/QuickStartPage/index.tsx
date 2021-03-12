import { Link } from 'hyperstatic'
import Button from '/components/ui/Button'

import content from './quick-start.md'

import base from '/styles/base.css'

const QuickStartPage = () => (
  <div key="quickstart">
    <Button green href="https://github.com/loteoo/hyperstatic-starter/generate" target="_blank">
      Use the template
    </Button>
    <div class={base.markdownContent} innerHTML={content} />
    <hr />
    <Link href="/">Go back to home page</Link>
  </div>
)

export default QuickStartPage
