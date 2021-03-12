import { Link } from 'hyperstatic'

import base from '/styles/base.css'

const NotFoundPage = () => (
  <div key="notfound" class={base.markdownContent}>
    <h1>404.</h1>
    <p>Page not found.</p>
    <Link href="/">Go back to home page</Link>
  </div>
)

export default NotFoundPage
