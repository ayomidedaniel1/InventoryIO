import React from "react";
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-toast', () => ({
  show: jest.fn(),
}));

import LoginScreen from "../../app/(auth)/login";

test('LoginScreen renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});