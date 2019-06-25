import { ToggleGoodConnection } from '../actions'

export default ({ state }) => {
  const checked = !state.goodConnection
  return (
    <div class="fetching-mode-toggler">
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
