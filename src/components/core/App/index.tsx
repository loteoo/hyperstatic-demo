import { Router } from 'hyperstatic'
import Header from '/components/core/Header'
import Sidebar from '/components/core/Sidebar'
import Footer from '/components/core/Footer'

import '/styles/base.css'
import app from './app.css'

const App = (state) => {
  return (
    <div class={app.app}>
      <Header />
      <Sidebar menuOpened={state.menuOpened} />
      <main class={app.mainContent}>
        <Router />
      </main>
      <Footer />
    </div>
  )
}

export default App
