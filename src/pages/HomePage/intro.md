**Hyperstatic** is a small navigation layer on top of [hyperapp](https://github.com/jorgebucaran/hyperapp) that helps create *fast* and SEO friendly **static sites**.

It's goal is to be a simpler, lighter and faster Gatsby, that uses hyperapp instead of React, with a runtime of ~9kb. (hyperapp + hyperstatic, gzip)

It's TypeScript codebase has an inherently small footprint by using Puppeteer for pre-rendering and dynamic imports for code-splitting.

Sites built with hyperstatic are meant to be deployed on static hosting services like Netlify or Github Pages, but can be hosted on any static file server.

---


## Getting started


### 🚀 Starter template

The easiest way to get started is to use the starter template from [loteoo/hyperstatic-starter](https://github.com/loteoo/hyperstatic-starter).
