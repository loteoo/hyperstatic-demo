
import { css } from 'emotion'
import LinkWithStatus from './LinkWithStatus'
const style = css`
  width: 30%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;
  padding-left: 3rem;
  .menu {
    align-self: flex-end;
    position: sticky;
    top: 0;
    max-width: 20rem;
    margin: 6rem 0;
    h1 {
      font-size: 1.5rem;
      margin: 0;
    }
    nav {
      margin-bottom: auto;
      >ul {
        padding-left: 0;
      }
    }
    * {
      color: inherit;
    }
  }
  @media (max-width: 950px) {
    position: relative;
    width: 100%;
    padding: 1.5rem;
    margin: 1.5rem 0;
    .menu {
      align-self: center;
      margin: 0;
    }
  }

`

export default ({ state }) => (
  <aside class={style}>
    <div class="menu">
      <header role="banner">
        <h1>Hyperapp site generator</h1>
        <p>Static site generator with a code splitting and navigation layer</p>
      </header>
      <nav role="navigation">
        <LinkWithStatus state={state} bundleSize="7kb" to="/">Home</LinkWithStatus>
        <LinkWithStatus state={state} bundleSize="4kb" to="/project">The project</LinkWithStatus>
        <LinkWithStatus state={state} bundleSize="4kb" to="/starter">Starter template</LinkWithStatus>
        <LinkWithStatus state={state} bundleSize="3kb" to="/counter">Counter</LinkWithStatus>
        <LinkWithStatus state={state} bundleSize="7kb" to="/pokedex">Pokedex</LinkWithStatus>
        <LinkWithStatus state={state} bundleSize="3kb" to="/apod">APOD</LinkWithStatus>
        <LinkWithStatus state={state} bundleSize="3kb" to="/books">Book search</LinkWithStatus>
      </nav>
    </div>
  </aside>
)
