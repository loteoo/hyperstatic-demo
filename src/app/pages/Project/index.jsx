import markdown from './project.md'

console.log('onload:', markdown)

export default () => {
  console.log('onrender', markdown)
  return (
    <div innerHTML={markdown}></div>
  )
}
