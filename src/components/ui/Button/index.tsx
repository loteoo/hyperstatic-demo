import styles from './button.module.css'

const Button = ({ type = 'button', href = '', green = false, ...rest }, children) => {
  const props = {
    class: {
      [styles.button]: true,
      [styles.green]: green,
    },
    ...rest
  }
  if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} {...props}>
      {children}
    </button>
  )
}
export default Button
