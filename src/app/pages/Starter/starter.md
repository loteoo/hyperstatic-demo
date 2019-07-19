# Starter template 🚀

To easiest way to get started is to use this [starter template](https://github.com/loteoo/hyperstatic-starter).


---  


#### Otherwise, the installation in an existing project looks like this:  

1. `npm i hyperstatic`

2. Create a `routes.js` file with your routes in it.   
[Example](https://github.com/loteoo/hyperstatic-starter/blob/master/src/app/routes.js)



3. Replace hyperapp's `app` call with `hyperstatic`. Add the extra `routes` attribute that is needed.   
[Example](https://github.com/loteoo/hyperstatic-starter/blob/master/src/app.js#L18)  



4. Link to your pages using the `<Link>` component.   
[Example](https://github.com/loteoo/hyperstatic-starter/blob/master/src/app/view.jsx#L7)

5. (Optional) For pre-rendering, create a `render-pages.js`, list your URLs and call `renderPages` with them.   
[Example](https://github.com/loteoo/hyperstatic-starter/blob/master/render-pages.js)

Then add this helper command in your package.json scripts:  

```
"scripts": {
  "render-pages": "npm run build && node ./render-pages.js"
}
```


#### That should be it!
