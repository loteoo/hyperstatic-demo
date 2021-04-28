import Logo from '/src/components/core/Logo'
import { CloseMenu, OpenMenu } from '/src/actions'
import { bodyScrollLock } from '/src/effects';

import styles from './header.module.css'

import closeSvg from './close.svg';
import menuSvg from './menu.svg';

export const OpenMenuAndLockScroll = (state) => [
  OpenMenu(state),
  bodyScrollLock(true)
]

export const CloseMenuAndUnlockScroll = (state) => [
  CloseMenu(state),
  bodyScrollLock(false)
]


const Header = ({ menuOpened }) => (
  <header
    class={{
      [styles.header]: true,
      [styles.opened]: menuOpened,
    }}
  >
    <Logo />
    <button
      class={styles.menuToggler}
      aria-expanded={menuOpened}
      aria-controls="menu"
      onclick={
        menuOpened
        ? CloseMenuAndUnlockScroll
        : OpenMenuAndLockScroll
      }
    >
      Menu
      {menuOpened
        ? <img src={closeSvg} alt="Close menu" />
        : <img src={menuSvg} alt="Open menu" />
      }
    </button>
  </header>
)

export default Header
