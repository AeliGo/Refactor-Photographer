import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.tsx').default,
    routes: [
      {
        path: '/Home',
        exact: true,
        component: require('../Home/index.tsx').default,
      },
      {
        path: '/Home/model',
        exact: true,
        component: require('../Home/model.ts').default,
      },
      {
        path: '/Home/service',
        exact: true,
        component: require('../Home/service.ts').default,
      },
      {
        path: '/Infomation',
        exact: true,
        component: require('../Infomation/index.tsx').default,
      },
      {
        path: '/Thumbnail',
        exact: true,
        component: require('../Thumbnail/index.tsx').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.tsx').default,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/pagalili/Documents/refactor-photographer/Refactor-Photographer/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/pagalili/Documents/refactor-photographer/Refactor-Photographer/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
