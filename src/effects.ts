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
  setTimeout(() => {
    requestAnimationFrame(() => {
      Prism.highlightAllUnder(document.getElementById('app'))
    })
  })
}

export const highLight = () => [highLightFx]

const preloadImageFx = (_dispatch, src) => {
  const img = new Image()
  img.src = src
}

export const preloadImage = (src) => [preloadImageFx, src]
