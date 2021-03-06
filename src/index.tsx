import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'scss/_normalize.scss';
import 'scss/global.scss';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// HMR
declare let module: { hot: any};

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
