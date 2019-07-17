import { htmlToVdom } from 'hyperstatic/src/htmlToVdom'
import home from './home.md'
import { Link } from 'hyperstatic'

export default () => (
  <div>
    {htmlToVdom(home)}
    <p>Get started <Link to="/starter">here</Link>!</p>
  </div>
)
