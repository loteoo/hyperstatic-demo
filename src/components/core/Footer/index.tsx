import styles from './footer.css'

const Footer = () => (
  <footer class={styles.footer}>
    <a
      href="https://github.com/loteoo/hyperstatic-demo"
      target="_blank"
      rel="noopener noreferrer"
    >
      [source code]
    </a>
    <a
      href="https://github.com/loteoo/hyperstatic"
      target="_blank"
      rel="noopener noreferrer"
    >
      [hyperstatic]
    </a>
    <a
      href="https://github.com/jorgebucaran/hyperapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      [hyperapp]
    </a>
  </footer>
)

export default Footer
