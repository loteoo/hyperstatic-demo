
import LinkWithStatus from './LinkWithStatus'

export default ({ state }) => (
  <aside class="sidebar">
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
