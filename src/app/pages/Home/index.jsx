// import markdown from './home.md'

// export default () => (
//   <div innerHTML={markdown}></div>
// )

export default () => (
  <div key="home">
    <h1 id="this-site-is-fast">This site is fast</h1>
    <p>It was built using a code splitting and navigation layer on top of <strong>Hyperapp 2.0</strong>, then pre-rendered using a build command.</p>
    <p>This <em>layer</em> is a static site generator with goals similar to <a href="https://www.gatsbyjs.org/">Gatsbyjs</a>, but it is simpler, lighter, faster and is for building Hyperapp based websites.</p>
    <p>It builds sites that are meant to be deployed on static hosting services like Netlify or Github Pages, which are often free, efficient, highly scalable and a lot more.</p>
    <p>Pages are bundled individually and loaded asynchronously at the right time using a very smart <code>&lt;Link&gt;</code> component. They all still share the same global state and run in the same Hyperapp instance.</p><h4 id="here-are-the-pieces">Here are the pieces:</h4><h2 id="routing">Routing</h2><p>To route your app, list all your route patterns in a <code>routes.js</code> file, and map these routes to your page components using parcel's <code>import</code> function.</p>
    <p>This is the routing for this site:</p>
    <pre><code>{`
export default {
  '/': import('./pages/Home'),
  '/project': import('./pages/Project'),
  '/starter': import('./pages/Starter'),
  '/counter': import('./pages/Counter'),
  '/pokedex': import('./pages/Pokedex'),
  '/apod': import('./pages/Apod'),
  '/books': import('./pages/Books/BookSearch'),
  '/books/:id': import('./pages/Books/Book'),
}
`}</code></pre>
    <p>The <code>import(...)</code> function indicates parcel to bundle each page in it's own bundle. These bundles will be loaded asynchronously during your application's runtime.</p><h2 id="navigation">Navigation</h2><p>The <code>&lt;Link&gt;</code> component works just like your typical Hyperapp / React / Gatsby <code>&lt;Link&gt;</code> component. Use use them like this:</p>
    <p><code>{`<Link to="/my-awesome-page>My awesome page!</Link>`}</code><br />or<br /><code>{`<Link to="/products/some-slug/7839>My awesome product by ID!</Link>`}</code></p>
    <p><strong>Except they do more stuff under the hood.</strong></p>
    <p>Here is what is going on in the background.</p>
    <p>Each link is aware of the page bundle it points to. Links have 4 statuses: </p><ul>
      <li><strong>Invalid route</strong>:
The link has no matching route. The link knows it will 404. The link will still work, but will not be doing anything in the background.</li>
      <li><strong>Iddle</strong>:
The link is valid and waits to enter the viewport or to be hovered on.</li>
      <li><strong>Loading</strong>:
The page bundle matching the link is being downloaded. This was triggered because this link, or another link pointing to the same bundle has entered the viewport, been hovered on or has been clicked.</li>
      <li><strong>Loaded</strong>:
The matching route is ready to be viewed</li>
      <li><strong>Active</strong>:
The route has been activated, the matching page is being viewed.</li>
    </ul><p>For this demo, the statuses for each link is being shown with an icon, but usually, this would all be transparent to the user.</p>
    <p>You can <a href="https://css-tricks.com/throttling-the-network/">throttle your network</a> to simulate a slow connection and reload the page. Try a 3G connection to see how the site reacts on slow networks. The pre-loading of sub pages should be less agressive (mouse hover only).</p><h2 id="pages">Pages</h2><p>Pages are Hyperapp components (view functions) that receive the state.</p>
    <p>They are bundled in their own file using parcel's <a href="https://parceljs.org/code_splitting.html">dynamic imports</a>. </p>
    <p>The bundles are loaded in the background when links pointing to them enter the viewport, or when a user hovers on their corresponding links.</p>
    <p>If they need dynamic runtime data, they get it from the state as usual.</p>
    <p>Pages can export a <code>Init</code> Hyperapp Action which gets triggered when the page's bundle has been downloaded in the background.</p>
    <p>This <code>Init</code> Action can be used to setup the state in advance for the page or load data ahead-of-time via side-effects.</p><h2 id="pre-rendering">Pre-rendering</h2><p>Pre-rendering the site is actually optionnal. The entire site will still work perfectly without it, but doing it still has some nice benefits. </p>
    <p>Even if Hyperapp's tiny size and quick rendering brings your TTI to a negligable number, there will always be users with slow network connections and low-end devices who will benefit from this. </p>
    <p>This also allows your site to be indexed faster by search engines.</p>
    <p>To render your routes, run this command:</p><pre><code>npm run render-pages</code></pre><p>If you have dynamic routes that you want to render, you need to give an array of all these URLs to the generator.</p>
    <p>You can do this dynamically by adding javascript to the <code>createPages.js</code> file.</p>
  </div>
)
