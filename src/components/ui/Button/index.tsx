import { Link } from 'hyperstatic'
import styles from './button.css'

const Button = ({ type = 'button', href, green = false, ...rest }, children) => {
  const props = {
    class: {
      [styles.button]: true,
      [styles.green]: green,
    },
    ...rest
  }
  if (href) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} {...props}>
      {children}
    </button>
  )
}
export default Button
