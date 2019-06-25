
export const ToggleGoodConnection = (state) => ({
  ...state,
  goodConnection: !state.goodConnection
})

export const HandleError = (state, err) => {
  console.error(err)
  return state
}
