import { Link, PathInfo } from 'hyperstatic'
import Header from '/components/core/Header'
import Footer from '/components/core/Footer'
import { CloseMenu, OpenMenu, PreventDefault, ScrollTo } from '/actions'
import styles from './sidebar.css'

import homeMenu from '/pages/HomePage/menu.md'
import docsMenu from '/pages/DocsPage/menu.md'
import statusEmojis from '/utils/statusEmojis'

const RoutedMenu = ({ route, ...props}, children) => {

  if (window.location.pathname !== route) {
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

const Sidebar = ({ menuOpened }) => (
  <aside class={{
    [styles.sidebar]: true,
    [styles.opened]: menuOpened,
  }}>
    <Header />
    <button class={styles.menuToggler} aria-expanded={menuOpened} aria-controls="menu" onclick={menuOpened ? CloseMenu : OpenMenu}>
      Menu
      {menuOpened
        ? <img src={require('./close.svg')} alt="Close menu" />
        : <img src={require('./menu.svg')} alt="Open menu" />
      }
    </button>
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
      <RoutedMenu route="/" innerHTML={homeMenu} />
      <RoutedMenu route="/docs" innerHTML={docsMenu} />

      {/*
      <RoutedMenu route="/ecosystem" innerHTML={ecosystemLinks} />
      <RoutedMenu route="/tutorial" innerHTML={tutoLinks} /> */}

    </nav>
    <Footer />
  </aside>
)

export default Sidebar
