import Prism from 'prismjs'

interface ScrollProps {
  id: string;
}

const scrollFx = (_dispatch, { id }: ScrollProps) => {
  const el = document.getElementById(id)
  if (el) {
    requestAnimationFrame(() => {
      window.scroll({
        top: el.offsetTop - 32
      })
    })
  }
}

export const scrollTo = (props: ScrollProps) => [scrollFx, props]

const highLightFx = () => {
  console.log('highLightFx')
  setTimeout(() => {
    requestAnimationFrame(() => {
      Prism.highlightAllUnder(document.getElementById('app'))
    })
  })
}

export const highLight = () => [highLightFx]
