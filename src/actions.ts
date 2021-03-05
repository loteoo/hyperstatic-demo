import { scrollTo } from './effects'

export const OpenMenu = (state) => ({
  ...state,
  menuOpened: true
})

export const CloseMenu = (state) => ({
  ...state,
  menuOpened: false
})



export const ScrollTo = (state, ev) => [
  CloseMenu(state),
  [
    scrollTo({ id: ev.target.href.split('#')[1] })
  ]
]

export const PreventDefault = (state, ev) => {
  ev.preventDefault();
  return state;
};
