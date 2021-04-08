### Installation in an existing hyperapp project  

<div class="callout">

⚠ Your environment (browser or bundling setup) needs to support [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#browser_compatibility).

</div>

#### Steps

1. Install hyperstatic

```bash
npm i hyperstatic
```

2. Replace hyperapp's `app` function call with `hyperstatic`. Remove the `node` prop.

```javascript
hyperstatic({
  init: {},
  view: App,
})
```

3. Make sure have pages that you want to route in your project, each with it's own file. The view function should be the default export. [More info on pages](/docs#pages)

4. Add routing for your pages with the extra `routes` object that is needed. The keys are your routes and the value are the page imports.   

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
  <Link href="/other-page">Link to other page</Link>
</div>
```

7. For prerendering, add a helper command like this in your package.json scripts:  

```json
"scripts": {
  "prerender": "npm run build && hyperstatic"
}
```

The `hyperstatic` command should run *after* a standard static build of your site with your tooling of choice.

Hopefully that was enough to get you started! Checkout the [guide](/guide) for more information, or the [Api reference](/api-reference) for all the information!

---

## About this site
This is site acts as documentation for hyperstatic but also as a demo of it's capabilities. Since each page is prerendered so it should work even with JS disabled. 

Feel free to play around with network throtling to better see how the runtime reacts to slow network conditions.


