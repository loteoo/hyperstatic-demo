import { Router, isPrerendering } from 'hyperstatic'
import Sidebar from '/src/components/core/Sidebar'

import '/src/styles/base.module.css'
import app from './app.module.css'

const HandleClicks = (state, ev) => {

  // If is an anchor link with an ID
  if (ev.target.matches(':is(h1, h2, h3, h4, h5, h6)[id]')) {
    location.hash = `#${ev.target.id}`
  }

  return state
}

const App = (state) => {
  return (
    <div class={app.app} onclick={HandleClicks}>
      <div class={app.cols}>
        <Sidebar menuOpened={state.menuOpened} />
        <main class={app.mainContent}>
          <Router />
        </main>
      </div>
    </div>
  )
}

export default App
