import React from "react";
import renderer from 'react-test-renderer';
import { AuthProvider } from "../../contexts/authContext";

jest.mock('react-native-simple-toast', () => ({
  show: jest.fn(),
}));

import LoginScreen from "../../app/(auth)/login";

test('LoginScreen renders correctly', () => {
  const tree = renderer.create(
    <AuthProvider>
      <LoginScreen />
    </AuthProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});