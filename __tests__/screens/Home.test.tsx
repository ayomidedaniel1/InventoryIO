import React from "react";
import renderer from 'react-test-renderer';
import { InventoryProvider } from "../../contexts/inventoryContext";
import { AuthProvider } from "../../contexts/authContext";

jest.mock('react-native-simple-toast', () => ({
  show: jest.fn(),
}));

import HomeScreen from "../../app/(public)/home";

test('HomeScreen renders correctly', () => {
  const tree = renderer.create(
    <AuthProvider>
      <InventoryProvider>
        <HomeScreen />
      </InventoryProvider>
    </AuthProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
