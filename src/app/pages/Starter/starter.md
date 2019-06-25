# Starter template 🚀

To easiest way to get started is to use this [starter template](https://github.com/loteoo/hyperapp-site-generator-starter).


---  


#### Other wise, the installation in an existing project looks like this:  

1. `npm i hyperapp-site-generator`

2. Create a `routes.js` file with your routes in it.   
[Example](https://github.com/loteoo/hyperapp-site-generator-starter/blob/master/src/app/routes.js)



3. Hook up the initial state and the router when instantiating your Hyperapp 2.0 app.   
[Example](https://github.com/loteoo/hyperapp-site-generator-starter/blob/master/src/app.js#L18)  



4. Link to your pages using the `<Link>` component.   
[Example](https://github.com/loteoo/hyperapp-site-generator-starter/blob/master/src/app/view.jsx#L15)

5. (Optional) For pre-rendering, create a `render-pages.js`, list your URLs and call `renderPages` with them.   
[Example](https://github.com/loteoo/hyperapp-site-generator-starter/blob/master/render-pages.js)

Then add this helper command in your package.json scripts:  

```
"scripts": {
  "render-pages": "npm run build && node ./render-pages.js"
}
```


#### That should be it!
