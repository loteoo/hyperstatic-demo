import intro from './intro.md'
import manualInstall from './manual-install.md'

import base from '/styles/base.css'
import home from './home.css'
import Button from '/components/ui/Button'
import { Link } from 'hyperstatic'

const HomePage = () => (
  <div key="home">
    <div class={home.hero}>
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
      <Button href="/quick-start">Get started</Button>
      <Link href="/concepts">Read the docs</Link>
    </div>
    <hr/>
    <div class={base.markdownContent}>
      <div innerHTML={intro} />
      <Button green href="https://github.com/loteoo/hyperstatic-starter/generate" target="_blank">
        Use the template
      </Button>
      <hr />
      <div innerHTML={manualInstall} />
      <hr />
      <p>Hopefully that was enough to get you started! Checkout the <Link href="/api-reference">reference</Link> for more info!</p>
    </div>
  </div>
)

export default HomePage
