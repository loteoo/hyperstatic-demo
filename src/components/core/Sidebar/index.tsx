import { Link, PathInfo, PathStatus } from 'hyperstatic'

import Logo from '/components/core/Logo'
import Footer from '/components/core/Footer'
import { CloseMenu, OpenMenu, PreventDefault, ScrollTo } from '/actions'

import utils from '/styles/utils.css'
import styles from './sidebar.css'


const RoutedMenu = ({ route, ...props}, children) => window.location.pathname === route && (
  <div
    class="sub-links"
    onmousedown={[ScrollTo, ev => ev.target.href ? ev.target.href.split('#')[1] : null]}
    onclick={PreventDefault}
    {...props}
  >
    {children}
  </div>
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
    <Logo />
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
        <li><Link href="/">{({ status }: PathInfo) => <span>Introduction <span>{statusEmojis[status]}</span></span>}</Link></li>
        <li><Link href="/concepts">{({ status }: PathInfo) => <span>Main concepts <span>{statusEmojis[status]}</span></span>}</Link></li>
        <li><Link href="/quick-start">{({ status }: PathInfo) => <span>Quick start <span>{statusEmojis[status]}</span></span>}</Link></li>
        <li><Link href="/reference">{({ status }: PathInfo) => <span>Api reference <span>{statusEmojis[status]}</span></span>}</Link></li>
        <li><Link href="/contribute">{({ status }: PathInfo) => <span>Contribute <span>{statusEmojis[status]}</span></span>}</Link></li>
      </ul>
      {/* <RoutedMenu route="/" innerHTML={homeLinks} />
      <RoutedMenu route="/reference" innerHTML={apiLinks} />
      <RoutedMenu route="/ecosystem" innerHTML={ecosystemLinks} />
      <RoutedMenu route="/tutorial" innerHTML={tutoLinks} /> */}

    </nav>
    <Footer />
  </aside>
)
// const Sidebar = () => (
//   <aside class={styles.sidebar}>
//     <div class={[utils.container, styles.inner]}>
//       <Link href="/">Home</Link>
//       <Link href="/docs">Documentation</Link>
//       <Link href="/ref">Api reference</Link>
//     </div>
//   </aside>
// )

export default Sidebar
