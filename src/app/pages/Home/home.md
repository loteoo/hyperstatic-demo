# This site is fast
#### Very fast

It was built using **Hyperstatic**, a code splitting and navigation layer on top of Hyperapp 2.0, then pre-rendered using a build command.

This *layer* is a static site generator with goals similar to [Gatsbyjs](https://www.gatsbyjs.org/), but it is simpler, lighter, faster and is for building Hyperapp based websites.

It builds sites that are meant to be deployed on static hosting services like Netlify or Github Pages, which are often free, efficient, highly scalable and a lot more.

Pages are bundled individually and loaded asynchronously at the right time using a very smart `<Link>` component. They all still share the same global state and run in the same Hyperapp instance.

#### Here are the pieces: 


## Routing

To route your app, list all your route patterns in a `routes.js` file, and map these routes to your page components using parcel's `import` function.

This is the routing for this site:

```
export default {
  '/': import('./pages/Home'),
  '/project': import('./pages/Project'),
  '/starter': import('./pages/Starter'),
  '/counter': import('./pages/Counter'),
  '/pokedex': import('./pages/Pokedex'),
  '/pokedex/:id': import('./pages/Pokedex/Pokemon'),
  '/apod': import('./pages/Apod')
}
```

The `import(...)` function indicates parcel to bundle each page in it's own bundle. These bundles will be loaded asynchronously during your application's runtime.




## Navigation

The `<Link>` component works just like your typical Hyperapp / React / Gatsby `<Link>` component. Use use them like this:

`<Link to="/my-awesome-page>My awesome page!</Link>`  
or  
`<Link to="/products/some-slug/7839>My awesome product by ID!</Link>`  

**Except they do more stuff under the hood.**

Here is what is going on in the background.

Each link is aware of the page bundle it points to. Links have 4 statuses: 

- **Invalid route**:
  The link has no matching route. The link knows it will 404. The link will still work, but will not be doing anything in the background.
- **Iddle**:
  The link is valid and waits to enter the viewport or to be hovered on.
- **Loading**:
  The page bundle matching the link is being downloaded. This was triggered because this link, or another link pointing to the same bundle has entered the viewport, been hovered on or has been clicked.
- **Loaded**:
  The matching route is ready to be viewed
- **Active**:
  The route has been activated, the matching page is being viewed.

For this demo, the statuses for each link is being shown with an icon, but usually, this would all be transparent to the user.

You can [throttle your network](https://css-tricks.com/throttling-the-network/) to simulate a slow connection and reload the page. Try a 3G connection to see how the site reacts on slow networks. The pre-loading of sub pages should be less agressive (mouse hover only).




## Pages 
Pages are Hyperapp components (view functions) that receive the state.

They are bundled in their own file using parcel's [dynamic imports](https://parceljs.org/code_splitting.html). 

The bundles are loaded in the background when links pointing to them enter the viewport, or when a user hovers on their corresponding links.


If they need dynamic runtime data, they get it from the state as usual.

Pages can export a `Init` Hyperapp Action which gets triggered when the page's bundle has been downloaded in the background.

This `Init` Action can be used to setup the state in advance for the page or load data ahead-of-time via side-effects.

The `Init` Action is called **once per URL**.





## Pre-rendering 

Pre-rendering the site is actually optionnal. The entire site will still work perfectly without it, but doing it still has some nice benefits. 

Even if Hyperapp's tiny size and quick rendering brings your TTI to a negligable number, there will always be users with slow network connections and low-end devices who will benefit from this. 

This also allows your site to be indexed faster by search engines.

To render your routes, run this command:

```
npm run render-pages
```

If you have dynamic routes that you want to render, you need to give an array of all these URLs to the generator.

You can do this dynamically by adding javascript to the `createPages.js` file.

