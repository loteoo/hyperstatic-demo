import { Link } from 'hyperstatic'

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


const Sidebar = ({ menuOpened }) => (
  <aside class={{
    'sidebar': true,
    opened: menuOpened
  }}>

    <button class="menu-toggler" aria-expanded={menuOpened} aria-controls="menu" onclick={menuOpened ? CloseMenu : OpenMenu}>
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
        <li><Link href="/">Introduction</Link></li>
        <li><Link href="/docs">Documentation</Link></li>
        <li><Link href="/quick-start">Quick start</Link></li>
        <li><Link href="/contribute">Contribute</Link></li>
      </ul>
      {/* <RoutedMenu route="/" innerHTML={homeLinks} />
      <RoutedMenu route="/reference" innerHTML={apiLinks} />
      <RoutedMenu route="/ecosystem" innerHTML={ecosystemLinks} />
      <RoutedMenu route="/tutorial" innerHTML={tutoLinks} /> */}
    </nav>
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
