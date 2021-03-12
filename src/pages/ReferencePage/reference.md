# Reference

Detailed documentation for hyperstatic's APIs

---

## hyperstatic()

```javascript
import { hyperstatic } from "hyperstatic";

hyperstatic({ routes, options, ...regularHyperappConfig })
```

Initialize the hyperstatic runtime. This replaces your regular `app` call in a hyperapp app. It uses all the same options (`init`, `view`, `node`, `subscriptions`), but adds 2 extra properties: [routes](#routes) and [options](#options)

#### routes

Object specifying the routing for your site.

The keys are [path-to-regexp](https://github.com/pillarjs/path-to-regexp) route patterns and the values are hyperapp view functions receiving the state, imported via a [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) statement for code splitting.

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
import { hyperstatic } from "hyperstatic";
// ...
hyperstatic({
  routes,
  options,
  appConfig
});
```

</details>

## Pages

Pages are standard hyperapp view functions that are mapped to a route via the [routes](#routes) object.

These view functions will receive the full state of the hyperapp app as the argument.

#### init action

#### loadStatic effect

## Router component
```javascript

```

## Link component
```javascript

```
#### href prop
#### eagerLoad prop
#### fastClick prop

#### Callback values

## navigate effect

## onLocationChanged subscription

--- 

## State
