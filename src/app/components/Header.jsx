import { css } from 'emotion'
import FetchingModeToggler from './FetchingModeToggler'

const style = css`
  display: flex;
  justify-content: space-between;
`
const connSpeed = navigator.connection ? navigator.connection.downlink : 10

// Header
export default ({ state }) => (
  <header class={style}>
    <p>Connection speed: {connSpeed > 2 ? '⚡' : '🐢'}</p>
    <FetchingModeToggler state={state} />
  </header>
)
