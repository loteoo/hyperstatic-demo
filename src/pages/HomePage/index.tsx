import { Link, htmlToVdom } from 'hyperstatic'

import Button from '/src/components/ui/Button'

import { html as intro } from './intro.md'
import { html as bottom } from './bottom.md'

import base from '/src/styles/base.module.css'
import home from './home.module.css'

const HomePage = () => (
  <div key="home">
    <div class={home.hero} id="top">
      <h1>
        hyperapp based <i>fast site</i> generator
      </h1>
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
        <p>no waiting after slow APIs</p>
      </div>
      <div class={home.feature}>
        <h4>✂️ Code splitting</h4>
        <p>light bundles on a per page basis</p>
      </div>
    </div>
    <div class={home.actions}>
      <Button href="#getting-started">Get started</Button>
      <Link href="/docs">Read the docs</Link>
    </div>
    <hr/>
    <div class={base.markdownContent}>
      {htmlToVdom(intro)}
      <Button green href="https://github.com/loteoo/hyperstatic-starter/generate" target="_blank">
        Use the template
      </Button>
      <hr />
      {htmlToVdom(bottom)}
    </div>
  </div>
)

export default HomePage
