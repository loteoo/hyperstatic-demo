### Installation in an existing hyperapp project  

<div class="callout">

⚠ Your environment (browser or bundling setup) needs to support [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#browser_compatibility).

</div>

#### Steps

1. Install hyperstatic

```bash
npm i hyperstatic
```

2. Replace hyperapp's `app` function call with `hyperstatic`. Remove the `node` prop. Provide a `<div>` with the id `hyperstatic` in your HTML.

```javascript
hyperstatic({
  init: {},
  view: (state) => h('h1', {}, text('Hello!')),
})
```
```html
<body>
  <!-- ... -->
  <div id="hyperstatic"></div>
  <!-- ... -->
</body>
```

3. Make sure you have pages that you want to route in your project, each with it's own file. Each file should export a view function as the default export. [More info on pages](/docs#pages)

4. Add routing for your pages with the extra `routes` object that is needed. The keys are your routes patterns and the values are the page dynamic imports.   

```javascript
hyperstatic({
  //...
  routes: {
    '/': import('./pages/HomePage'),
    '/counter': import('./pages/CounterPage'),
    '/items/:id': import('./pages/ItemDetails'),
    '/:splat*': import('./pages/NotFoundPage')
  },
  //...
})

```


5. Add the hyperstatic `Router` component that will render the pages somewhere at near top of your app view   

```javascript
import { Router } from 'hyperstatic'

// Hyperscript
const RootView = (state) => (
  h('div', {}, [
    Header(),
    Router(), // <-- Here
    Footer(),
  ])
)

// JSX
const RootView = (state) => (
  <div>
    <Header />
    <Router />{/* <-- here */}
    <Footer />
  </div>
)
```

6. Link to your pages using the `Link` component.   

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
  <Link href="/other-page">
    Link to other page
  </Link>
</div>
```

7. For prerendering, add a helper command like this in your package.json scripts:  

```json
"scripts": {
  "prerender": "npm run build && hyperstatic"
}
```

The `hyperstatic` command should run *after* a normal static build of your site with your tooling of choice.

Hopefully that was enough to get you started! Checkout the [docs](/docs) for more info!

---

## About this site
This is site acts as documentation for hyperstatic but also as a demo of it's capabilities. Since each page is prerendered so it should work even with JS disabled. 

Feel free to play around with network throtling to better see how the runtime reacts to slow network conditions.


