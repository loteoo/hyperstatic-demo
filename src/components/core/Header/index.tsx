import Logo from '/components/core/Logo'

import utils from '/styles/utils.css'
import styles from './header.css'

const Header = () => (
  <header class={styles.header}>
    <div class={[utils.container, styles.inner]}>
      <Logo />
    </div>
  </header>
)

export default Header
