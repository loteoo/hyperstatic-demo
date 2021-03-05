import { Link } from 'hyperstatic'

import utils from '/styles/utils.css'

const QuickStartPage = () => (
  <div key="quickstart" class={utils.container}>
    <h1>QuickStartPage</h1>
    <Link href="/">Go back to home page</Link>
  </div>
)

export default QuickStartPage
