### Installation in an existing hyperapp project  

#### Prerequisite

Your environment (browser or bundling setup) needs to support [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports).

#### Steps

1. Install hyperstatic

```
npm i hyperstatic
```

2. Create a `routes` object with your routes patterns in it.   

```javascript
const routes = {
  '/': import('./pages/HomePage'),
  '/secondary': import('./pages/SecondaryPage'),
  '/counter': import('./pages/CounterPage'),
  '/characters': import('./pages/CharacterList'),
  '/characters/:id': import('./pages/CharacterDetails'),
  '/:splat*': import('./pages/NotFoundPage')
}
```

3. Replace hyperapp's `app` function call with `hyperstatic`. Add the extra `routes` attribute that is needed.   

```javascript
hyperstatic({
  routes,
  init: {},
  view: App,
  node: document.getElementById('app')
})
```

4. Add the hyperstatic `Router` component that will render the pages somewhere at the top of your app   

```javascript
import { Router } from 'hyperstatic'

// Hyperscript
h('div', {}, [
  Header(),
  Router(),
  Footer(),
])

// JSX
<div>
  <Header />
  <Router />
  <Footer />
</div>
```

5. Link to your pages using the `Link` component.   

```javascript
import { Link } from 'hyperstatic'

// Hyperscript
h('div', {}, [
  Link({ href: '/other-page' }, [
    text('Link to other page')
  ]),
])

// JSX
<div>
  <Link href="/other-page">Link to other page</Link>
</div>
```

6. For prerendering, add a helper command like this in your package.json scripts:  

```json
"scripts": {
  "prerender": "npm run build && hyperstatic"
}
```

The `hyperstatic` command should run *after* a standard static build of your site with your tooling of choice.

