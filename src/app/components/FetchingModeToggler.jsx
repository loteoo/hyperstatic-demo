
import { css } from 'emotion'
import { ToggleGoodConnection } from '../actions'

const style = css`

  margin: 1rem 0;
  color: var(--text-color);
  position: relative;
  user-select: none;


  input[disabled] + label,
  input[disabled]:hover + label {
    color: var(--text-color);
  }

  input[type="checkbox"] {
    position: absolute;
    top: auto;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    white-space: nowrap;
  }

  input[type="checkbox"] + label {
    position: relative;
    padding: 0.5em;
    padding-right: 4em;
    color: var(--text-color);
  }

  input[type="checkbox"]:focus + label,
  input[type="checkbox"]:hover + label {
    color: currentColor;
  }

  input[type="checkbox"]:focus + label::before,
  input[type="checkbox"]:hover + label::before {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25)
  }


  input[type="checkbox"] + label::before,
  input[type="checkbox"] + label::after {
    content: "";
    position: absolute;
    height: 1.5em;
    transition: all 200ms ease;
  }

  input[type="checkbox"] + label::before {
    right: 0;
    width: 3em;
    border: 0.15rem solid var(--border-color);
    background: var(--border-color);
    border-radius: 2rem;
    cursor: pointer;
  }

  input[type="checkbox"] + label::after {
    right: 1.6em;
    background-color: #fff;
    background-position: center center;
    border-radius: 50%;
    width: 1.5em;
    border: 0.15rem solid var(--border-color);
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label::after {
    right: 0;
    border-color: var(--accent-color);
    color: var(--accent-color);
  }

  input[type="checkbox"]:indeterminate + label::after {
    right: 0.8em;
  }

  input[type="checkbox"]:indeterminate + label::before {
    background-color: #ddd;
  }

  input[type="checkbox"]:checked + label::before {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
  }

  input[type="checkbox"][disabled] + label::before {
    background-color: transparent;
    border-color: #ddd;
    cursor: auto;
  }
  input[type="checkbox"][disabled]:not(:checked) + label::before {
    background-color: #ddd;
  }

  input[type="checkbox"][disabled] + label::after {
    border-color: #ddd;
    cursor: auto;
  }

  input[disabled]:hover + label {
    color: var(--text-color); /* case for CSS custom property if not supporting IE/Edge */
  }

  input[type="checkbox"][disabled]:hover + label::before {
    box-shadow: none;
  }

  input[type="checkbox"][disabled]:hover + label::after {
    background-image: none;
  }

`

export default ({ state }) => {
  const checked = !state.goodConnection
  return (
    <div class={style}>
      <input
        type="checkbox"
        id={'fetch-mode-checkbox'}
        checked={checked}
        value={checked}
        oninput={ToggleGoodConnection}
      />
      <label for={'fetch-mode-checkbox'}>Toggle battery saver mode: </label>
      <input name="fetch-mode" type="hidden" value={(!!checked).toString()} />
    </div>
  )
}
