
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
