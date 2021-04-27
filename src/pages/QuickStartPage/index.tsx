import { Link, htmlToVdom } from 'hyperstatic'
import Button from '/src/components/ui/Button'

import { html } from './quick-start.md'

import base from '/src/styles/base.module.css'

const QuickStartPage = () => (
  <div key="quickstart">
    <Button green href="https://github.com/loteoo/hyperstatic-starter/generate" target="_blank">
      Use the template
    </Button>
    <div class={base.markdownContent}>
      {htmlToVdom(html)}
    </div>
    <hr />
    <Link href="/">Go back to home page</Link>
  </div>
)

export default QuickStartPage
