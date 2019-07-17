import LinkWithStatus from './LinkWithStatus'

import { Github } from './icons'

export default ({ state }) => (
  <aside class="sidebar">
    <div class="menu">
      <header role="banner">
        <h1>Hyperstatic</h1>
        <p>Static site generator with a code splitting and navigation layer</p>
      </header>
      <nav role="navigation">
        <LinkWithStatus state={state} to="/">Home</LinkWithStatus>
        <LinkWithStatus state={state} to="/project">The project</LinkWithStatus>
        <LinkWithStatus state={state} to="/starter">Quick start </LinkWithStatus>
        <LinkWithStatus state={state} to="/counter">Counter</LinkWithStatus>
        <LinkWithStatus state={state} to="/pokedex">Pokedex</LinkWithStatus>
        <LinkWithStatus state={state} to="/apod">APOD</LinkWithStatus>
      </nav>
      <footer>
        <a href="https://github.com/loteoo/hyperstatic" target="_blank" rel="noopener noreferrer">Hyperstatic Github <Github /></a>
        <a href="https://github.com/loteoo/hyperstatic-demo" target="_blank" rel="noopener noreferrer">Demo site source code <Github /></a>
      </footer>
    </div>
  </aside>
)
