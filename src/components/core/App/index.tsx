import { Router } from 'hyperstatic'
import Sidebar from '/components/core/Sidebar'
import Footer from '/components/core/Footer'

import '/styles/base.css'
import app from './app.css'

const App = (state) => {
  return (
    <div class={app.app}>
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
