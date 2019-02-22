/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
// eslint-disable-next-line import/order
import renderer from 'react-test-renderer';

// eslint-disable-next-line no-undef
it('renders correctly', () => {
  renderer.create(<App />);
});
