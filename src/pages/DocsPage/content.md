# Documentation

Detailed documentation / API reference for hyperstatic

---

## hyperstatic()

```javascript
import { hyperstatic } from "hyperstatic";

hyperstatic({ routes, options, ...regularHyperappConfig })
```

Initialize the hyperstatic runtime. This replaces your regular `app` call in a hyperapp app. It uses all the same options (`init`, `view`, `node`, `subscriptions`), but adds 2 extra properties: [routes](#routes) and [options](#options)

#### routes

Object specifying the routes for your site.

The keys are [path-to-regexp](https://github.com/pillarjs/path-to-regexp) route patterns and the values are [pages](#pages) (hyperapp view functions) receiving the state. The page should be imported via a [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) statement for code splitting.

Sample `routes` object:

```javascript
const routes = {
  '/': import('./pages/HomePage'),
  '/quick-start': import('./pages/QuickStartPage'),
  '/docs': import('./pages/DocumentationPage'),
  '/counter': import('./pages/CounterPage'),
  '/characters': import('./pages/CharacterList'),
  '/characters/:id': import('./pages/CharacterDetails'),
  '/:splat*': import('./pages/NotFoundPage')
}
```

#### options

Simple `options` object:

```javascript
const options = {
  baseUrl: '/',
  loader: Loader,
  fastClicks: true,
  eagerLoad: true
}
```

- **baseUrl** - Base URL to prepend to all routes, useful when deploying on a sub path
- **loader** - Custom loader view component in case of very slow network connections
- **fastClicks** - Navigate `onmousedown` instead of `onmouseclick` for extra *snappiness* 💨
- **eagerLoad** - Prefetch pages when links pointing to them enters the viewport



<details>
<summary>Full example</summary>

```javascript
// Hyperstatic runtime
import { hyperstatic } from 'hyperstatic'

// Root view
import App from '/components/core/App'
import Header from '/components/core/Header'
import Footer from '/components/core/Footer'

hyperstatic({

  // Routing
  routes: {
    '/': import('./pages/HomePage'),
    '/counter': import('./pages/Counter'),
    '/items': import('./pages/ItemList'),
    '/items/:id': import('./pages/ItemDetails'),
  },

  // All these are optional
  options: {
    baseUrl: '/',
    loader: (state) => <h2>Loading...</h2>,
    fastClicks: true,
    eagerLoad: true
  },

  // Initial state
  init: { foo: 2, bar: 4 },

  // App view
  view: (state) => (
    <main>
      <Header />
      <Router />
      <Footer />
    </main>
  ),

  // Regular subs array
  subscriptions: []
})

```

</details>

## Pages

A page is simply a javascript module (javascript file) that exports a standard hyperapp view function as the default export. This file is mapped to a route via the [routes](#routes) object.

These view functions will receive the full state of the hyperapp app as the argument.

Pages can also have export an [init](#init) hyperapp action to prepare the state and load data.

#### init action

Each page can have a named export called `init` that contains an hyperapp action.

This action is ran once per page, ahead of time, before the page renders.

You can use this action to setup the state in a way that's convenient for the page.


```javascript
// Initialize state
export const init = (state) => ({
  ...state,
  counter: 0
})
```



<details>
<summary>Full Counter page with initial state</summary>

```javascript
// Initialize state
export const init = (state) => ({
  ...state,
  counter: 0
})

// Actions
const Increment = (state) => ({ ...state, counter: state.counter + 1 })
const Decrement = (state) => ({ ...state, counter: state.counter - 1 })

// View
const CounterPage = (state) => (
  <div>
    <h2>Counter</h2>
    <h1>{state.counter}</h1>
    <button onclick={Decrement}>-</button>
    <button onclick={Increment}>+</button>
  </div>
)

export default CounterPage
```

</details>

The init action actually receives a parameter: a [location](#location) object with route information about the page that is being initialized.


#### loadStatic effect

loadStatic is an hyperapp effect that, at buildtime, runs a given promise and **caches** the result for the runtime.

This caching behavior is disabled during development.

Example init action that loads data from an external API:
```javascript
import { loadStatic } from 'hyperstatic'

export const init = (state) => [
  {
    ...state,
    items: []
  },
  loadStatic({
    loader: async () => {
      const response = await fetch(`https://some-api.com/items`)
      const data = await response.json()
      return data
    },
    action: (state, data) => ({ ...state, items: data }),
    error: (state, error) => ({ ...state, error: error.message })
  })
]
```

<details>
<summary>Example using the location object</summary>


```javascript
import { loadStatic } from 'hyperstatic'

export const init = (state, location) => [
  state,
  loadStatic({
    loader: async () => {
      const response = await fetch(
        `https://some-api.com/items/${location.params.id}`
      )
      const data = await response.json()
      return data
    },
    action: (state, data) => ({
      ...state,
      itemDetails: {
        ...state.itemDetails,
        [data.id]: data
      }
    }),
    error: (state, error) => ({ ...state, error: error.message })
  })
]
```

</details>

## Router component

The Router component is simply a hyperapp component that will render the current page based on the route. Feel free to place it anywhere in your app tree as you see fit!

```javascript
import { Router } from 'hyperstatic'
import Header from '/components/core/Header'
import Footer from '/components/core/Footer'

const View = (state) =>  (
  <main>
    <Header />
    <Router />
    <Footer />
  </main>
)

export default View

```

## Link component
The Link component is a hyperapp component that helps you add smart `<a href="...">` links on your site to navigate using client-side pushstate navigation.

It also serves as the trigger to know when to preload a page that could be navigated to (on hover or on entering viewport) for a fast user experience, and for crawling the site at build time.

```javascript
const SomeComponent = () => (
  <div>
    <Link href="/cool-page">My cool page</Link>
  </div>
)
```
It will also render some useful DOM attributes:

- **aria-current** - Useful for styling a link if it points to the current page.
- **data-status** - Useful for styling a link depending on the status of the linked page.

#### Function as Child pattern

Another useful feature of the `Link` component is that if you provide a function as it's children instead of vNodes, it will call it with useful information about the targeted page:

```javascript
const SomeComponent = () => (
  <div>
    <Link href="/cool-page">
      {({ ...location, status, active }) => (
        <span>
          Cool page is {status} and is
          {active ? 'active' : 'not active'}
        </span>
      )}
    </Link>
  </div>
)
```

- **...location** - All the info from the [location](#location) object for the linked page
- **status** - Status value of the targeted page. See [status](#status)
- **active** - Boolean value for if the page is the currently viewed page

<!-- 
#### Link props
The Link component also has some configurable props (other than `href`)

- **eagerLoad prop** - Enable or disable eager loading for this specific link
- **fastClick prop** - Enable or disable fast clicks for this specific link
 -->

## navigate effect

The `navigate` effect is an hyperapp effect provided by hyperstatic to do client-side pushstate navigation programatically.

```javascript
import { navigate } from 'hyperstatic'

const SomeAction = (state) => [state, navigate('/some-page')]
```



## onRouteChanged subscription

The `onRouteChanged` subscription is a hyperapp subscription provided by hyperstatic to run an action on every navigation event. Useful for running an action after every navigation.

```javascript
import { hyperstatic, onRouteChanged } from 'hyperstatic'

hyperstatic({
  routes,
  options,
  init: {},
  view: App,
  subscriptions: () => [
    onRouteChanged((state) => [
      CloseMenuAction(state),
      makeNoiseEffect(),
      registerPageViewEffect()
    ])
  ]
})

```


--- 

## State

Hyperstatic adds a few things to your state out-of-the-box. These pieces of information are used by hyperstatic itself but are also useful for users of the framework.

#### location object
The location object is a small user friendly object with details about the current route.

Example location object for a `/pizzas/:pizzaId` route with a `/pizzas/86?foo=bar&bizz=baz` path: 

```json
// App state
{
  "location": {
    "path": "/pizzas/86",
    "params": {
      "pizzaId": "86"
    },
    "query": {
      "foo": "bar"
    },
    "route": "/pizzas/:pizzaId"
  }
  // ...rest of state
}
```

#### paths object
There is also a `paths` object wich is a record of all paths that have been loaded and their respective [status](#status). The keys are the paths and the values are the status.

#### status enum

The status enum can be one of the following values:

- **iddle** - Page not loaded, waiting for a page load trigger event (hover or entered view port)
- **loading** - Javascript page bundle is loading
- **fetching** - If the page had an `init` containing a `loadStatic` effect, this means the cached value is being fetched.
- **ready** - Page is ready to be rendered
- **error** - There was an error loading the page


