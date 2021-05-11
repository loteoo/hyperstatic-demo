// Hyperstatic runtime
import { hyperstatic, onRouteChanged, Options, isPrerendering } from 'hyperstatic'

// Root view
import Loader from '/src/components/core/Loader'
import App from '/src/components/core/App'
import { bodyScrollLock, highLight } from '/src/effects'
import { CloseMenu } from './actions'

const routes = {
  '/': import('./pages/HomePage'),
  // '/concepts': import('./pages/MainConceptsPage'),
  '/docs': import('./pages/DocsPage'),
  '/counter': import('./pages/CounterPage'),
  '/characters': import('./pages/CharacterList'),
  '/characters/:id': import('./pages/CharacterDetails'),
}

// All of these are optional
const options: Options = {
  baseUrl: '/', // Path prefix
  loader: Loader, // Custom loading indicator in case of slow networks
  // eagerLoad: false
}

hyperstatic({
  routes,
  options,
  init: [
    {},
    !isPrerendering() && highLight()
  ],
  view: App,
  subscriptions: (state) => {
    console.log('State: ', state)
    return [
      onRouteChanged({
        action: (state) => [
          CloseMenu(state),
          bodyScrollLock(false),
          !isPrerendering() && highLight()
        ]
      })
    ]
  }
})

// Remove previous service workers 😅
navigator.serviceWorker.getRegistrations().then((registrations) => {
  for(let registration of registrations) {
    registration.unregister()
  }
})
