import React, {Component} from 'react';
import {Loadable, Routes} from 'components/Route/';
import {NotFound} from 'containers/Error/';
import requireAuth from './requireAuth';

const routeList = [
  {
    exact: true,
    path: '/',
    component: Loadable(() =>
      import(/* webpackChunkName:"Landing" */ 'pages/Landing/'),
    ),
  },
];
class Router extends Component {
  getRouteInfo = ({match, routes}) => {
    const {url} = match;
    const route = routes[url];
    return route;
  };
  renderRoute() {
    const {route} = this.state;
    if (!route || !route.LoadableComponent) {
      return <NotFound />;
    }
    const {LoadableComponent} = route;
    return <LoadableComponent {...this.props} />;
  }
  render() {
    return <Routes routeList={routeList} />;
  }
}
export default Router;
