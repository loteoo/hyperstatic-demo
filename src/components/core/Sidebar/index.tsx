import { htmlToVdom, Link, PathInfo } from 'hyperstatic'
import Header from '/src/components/core/Header'
import Footer from '/src/components/core/Footer'
import styles from './sidebar.module.css'

import { html as homeMenu } from '/src/pages/HomePage/menu.md'
import { html as docsMenu } from '/src/pages/DocsPage/menu.md'
import statusEmojis from '/src/utils/statusEmojis'


const RoutedMenu = ({ route, location, ...props}, children) => {

  if (location.path !== route) {
    return false;
  }

  return (
    <div
      class={styles.subLinks}
      // onmousedown={[ScrollTo, ev => ev.target.href ? ev.target.href.split('#')[1] : null]}
      // onclick={PreventDefault}
      {...props}
    >
      {children}
    </div>
  )
}

const MainLinkItem = ({ href, label }) => (
  <Link href={href}>
    {({ status, active }: PathInfo) => (
      <span>
        {label}
        <span>
          <small>{active ? 'active' : status}</small>
          {statusEmojis[status]}
        </span>
      </span>
    )}
  </Link>
)

const Sidebar = ({ menuOpened, location }) => (
  <aside class={{
    [styles.sidebar]: true,
    [styles.opened]: menuOpened,
  }}>
    <Header menuOpened={menuOpened} />
    <nav
      id="menu"
      class="menu"
    >
      <ul class={styles.mainLinks}>
        <li><MainLinkItem href="/" label="Introduction" /></li>
        {/* <li><MainLinkItem href="/concepts" label="Guide" /></li> */}
        <li><MainLinkItem href="/docs" label="Documentation" /></li>
        {/* <li><MainLinkItem href="/contribute" label="Contribute" /></li> */}
        <li><MainLinkItem href="/counter" label="Counter" /></li>
        <li><MainLinkItem href="/characters" label="Fetching example" /></li>
      </ul>
      <RoutedMenu location={location} route="/">
        {htmlToVdom(homeMenu)}
      </RoutedMenu>
      <RoutedMenu location={location} route="/docs">
        {htmlToVdom(docsMenu)}
      </RoutedMenu>
    </nav>
    <Footer />
  </aside>
)

export default Sidebar
