import { PathStatus } from 'hyperstatic';

const statusEmojis: Record<PathStatus, string> = {
  error: '⚠️',
  iddle: '🕗',
  loading: '⌛',
  fetching: '📩',
  ready: '✔️'
}

export default statusEmojis
