
import { Link } from 'hyperapp-site-generator'
import { Invalid, Loading, Check, Iddle } from './icons'

export default ({ state, to, bundleSize, ...props }, children) => {
  const statusToSvg = {
    'invalid': Invalid,
    'iddle': Iddle,
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
      class={{
        'link-with-status': true,
        [status]: true
      }}
      to={to}
      {...props}
    >
      {children}
      <small>{bundleSize}</small>
      {statusToSvg[status]()}
    </Link>
  )
}
