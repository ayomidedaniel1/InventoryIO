import React from "react";
import renderer from 'react-test-renderer';
import { InventoryProvider } from "../../contexts/inventoryContext";
import { AuthProvider } from "../../contexts/authContext";

jest.mock('react-native-simple-toast', () => ({
  show: jest.fn(),
}));

import CreateInventoryScreen from "../../app/(public)/createInventory";

test('create inventory Screen renders correctly', () => {
  const tree = renderer.create(
    <AuthProvider>
      <InventoryProvider>
        <CreateInventoryScreen />
      </InventoryProvider>
    </AuthProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});