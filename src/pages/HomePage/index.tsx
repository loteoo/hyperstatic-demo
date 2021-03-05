import { Link } from 'hyperstatic'
import content from './home.md'

import base from '/styles/base.css'
import utils from '/styles/utils.css'
import home from './home.css'

const HomePage = () => (
  <div key="home">

    <div class={home.hero}>
      <h1>
        Hyperstatic
        <sup>
          <a href="https://github.com/jorgebucaran/hyperapp" target="_blank" rel="noopener noreferrer">
            2.0.4
          </a>
        </sup>
      </h1>
      <h2>
        <span>The </span>
        <a href="https://github.com/jorgebucaran/hyperapp" target="_blank">
          hyperapp
        </a>
        <span> static site generator</span>
      </h2>
    </div>

    <div class={home.featuresGrid}>
      <div class={home.feature}>
        <h4>✔️ Routing</h4>
        <p>declarative route patterns</p>
      </div>
      <div class={home.feature}>
        <h4>🤖 Prerendering</h4>
        <p>fast loads and SEO friendliness</p>
      </div>
      <div class={home.feature}>
        <h4>⚡ Prefetching</h4>
        <p>No waiting after slow APIs</p>
      </div>
      <div class={home.feature}>
        <h4>✂️ Code splitting</h4>
        <p>Fast first page loads</p>
      </div>
    </div>
    <div class={base.markdownContent} innerHTML={content} />
  </div>
)

export default HomePage
