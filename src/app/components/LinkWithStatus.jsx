
import { Link } from 'hyperapp-site-generator'
import { css } from 'emotion'
import { Invalid, Loading, Check } from './icons'

const style = css`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  position: relative;
  text-decoration: none;
  &:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }
  &:hover {
    color: var(--accent-color);
    text-decoration: underline;
  }
  svg {
    margin-left: auto;
  }
  &.invalid {
    color: var(--danger-color);
    svg {
      stroke: currentColor;
    }
  }
  &.loading {
    svg {
      color: var(--warning-color);
      stroke: currentColor;
    }
  }
  &.ready {
    svg {
      color: var(--success-color);
      stroke: currentColor;
    }
  }
  &.active {
    color: var(--accent-color);
    svg {
      color: var(--success-color);
      stroke: currentColor;
    }
  }
  span {
    margin-left: auto;
  }
`

export default ({ state, to, bundleSize, ...props }, children) => {
  const statusToSvg = {
    'invalid': Invalid,
    'iddle': () => <span>{bundleSize}</span>,
    'loading': Loading,
    'ready': Check,
    'active': Check
  }

  const routes = Object.keys(state.routes).map(route => state.routes[route])
  const matchedRoute = routes.find(route => route.pattern.match(to))
  const active = to === state.location.path

  const status = !matchedRoute
    ? 'invalid'
    : !matchedRoute.view && !matchedRoute.loading
      ? 'iddle'
      : matchedRoute.loading
        ? 'loading'
        : active
          ? 'active'
          : 'ready'

  return (
    <Link
      scrollToTop
      class={{
        [style]: true,
        [status]: true
      }}
      state={state}
      to={to}
      {...props}
    >
      {children}
      {statusToSvg[status]()}
    </Link>
  )
}
