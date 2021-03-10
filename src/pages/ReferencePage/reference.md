# Reference

Detailed documentation for each of hyperstatic's APIs

---

## hyperstatic()

```javascript
import { hyperstatic } from "hyperstatic";

hyperstatic({ routes, options, ...appConfig })
```

Initialize the hyperstatic runtime

#### routes object

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

#### options object

Simple `options` object:

```javascript
const options = {
  baseUrl: '/', // Path prefix
  loader: Loader, // Custom loading indicator in case of slow networks
  fastClicks: true
}
```

- **baseUrl** - Foo

- **loader** - Foo

- **fastClicks** - Navigate on `onmousedown` instead of on `onmouseclick` for extra *snappiness* 💨





All together: 
```javascript
import { hyperstatic } from "hyperstatic";
// ...
hyperstatic({
  routes, options,
  appConfig
});
```




## Router component
```javascript

```

## Link component
```javascript

```

## navigate effect


