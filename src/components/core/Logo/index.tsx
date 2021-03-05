import logo from '/assets/favicon.png'

import { Link } from 'hyperstatic'

import styles from './logo.css'

const Logo = () => (
  <Link href="/" class={styles.logo}>
    ⚡
  </Link>
)

export default Logo
