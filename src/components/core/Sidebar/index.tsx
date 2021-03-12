import { Link, PathInfo, PathStatus } from 'hyperstatic'
import Header from '/components/core/Header'
import Footer from '/components/core/Footer'
import { CloseMenu, OpenMenu, PreventDefault, ScrollTo } from '/actions'
import styles from './sidebar.css'

import homeMenu from '/pages/HomePage/menu.md'
import referenceMenu from '/pages/ReferencePage/menu.md'

const RoutedMenu = ({ route, ...props}, children) => window.location.pathname === route && (
  <div
    class={styles.subLinks}
    onmousedown={[ScrollTo, ev => ev.target.href ? ev.target.href.split('#')[1] : null]}
    onclick={PreventDefault}
    {...props}
  >
    {children}
  </div>
)

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

const statusEmojis: Record<PathStatus, string> = {
  error: '⚠️',
  iddle: '🕗',
  loading: '⌛',
  fetching: '📩',
  ready: '✔️'
}

const Sidebar = ({ menuOpened }) => (
  <aside class={{
    [styles.sidebar]: true,
    opened: menuOpened
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
        <li><MainLinkItem href="/concepts" label="Guide" /></li>
        <li><MainLinkItem href="/reference" label="Api reference" /></li>
        <li><MainLinkItem href="/contribute" label="Contribute" /></li>
      </ul>
      <RoutedMenu route="/" innerHTML={homeMenu} />
      <RoutedMenu route="/reference" innerHTML={referenceMenu} />

      {/*
      <RoutedMenu route="/ecosystem" innerHTML={ecosystemLinks} />
      <RoutedMenu route="/tutorial" innerHTML={tutoLinks} /> */}

    </nav>
    <Footer />
  </aside>
)

export default Sidebar
