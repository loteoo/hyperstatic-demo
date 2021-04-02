import Button from '/components/ui/Button'
import styles from './counter.css'

// Initial state
export const init = (state) => ({ ...state, counter: 0 })

// Actions
const Increment = (state) => ({ ...state, counter: state.counter + 1 })
const Decrement = (state) => ({ ...state, counter: state.counter - 1 })

// View
const CounterPage = (state) => (
  <div>
    <h2>Counter component</h2>
    <p>It's code, view and logic was loaded asynchronously.</p>
    <p>Notice how it's still using the global app state.</p>
    <p>Have a look at it's code <a href="https://github.com/loteoo/hyperstatic-demo/blob/master/src/app/pages/Counter.jsx" target="_blank" rel="noopener noreferrer">here</a>!</p>
    <div class={styles.counter}>
      <h1>{state.counter}</h1>
      <div class={styles.buttons}>
        <Button onclick={Decrement}>-</Button>
        <Button onclick={Increment}>+</Button>
      </div>
    </div>
  </div>
)

export default CounterPage
