
import { Router } from 'hyperstatic'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

// root view
export default state => {
  console.log('State:', state)
  return (
    <div id="app" class="layout" role="document">
      <Sidebar state={state} />
      <main role="main" class="main-content">
        <Header state={state} />
        <div key={state.location.path} class="box">
          {Router(state)}
        </div>
      </main>
    </div>
  )
}
