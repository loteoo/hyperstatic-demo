import FetchingModeToggler from './FetchingModeToggler'

const connSpeed = navigator.connection ? navigator.connection.downlink : 10

// Header
export default ({ state }) => (
  <header class="header">
    <p>Connection speed: {connSpeed > 2 ? '⚡' : '🐢'}</p>
    <FetchingModeToggler state={state} />
  </header>
)
