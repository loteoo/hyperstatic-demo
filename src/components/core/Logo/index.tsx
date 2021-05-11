import styles from './logo.module.css'

const Logo = () => (
  <a
    title="Github repo"
    href="https://github.com/loteoo/hyperstatic"
    target="_blank"
    rel="noopener noreferrer"
    class={styles.logo}
  >
    <h2>
      hyperstatic
      <sup>
        <code>
          2.1.1
        </code>
      </sup>
    </h2>
  </a>
)

export default Logo
