import React from "react";
import renderer from 'react-test-renderer';
import { InventoryProvider } from "../../contexts/inventoryContext";
import { AuthProvider } from "../../contexts/authContext";

jest.mock('react-native-simple-toast', () => ({
  show: jest.fn(),
}));

import EditInventoryScreen from "../../app/(public)/editInventory";

test('Edit screen renders correctly', () => {
  const tree = renderer.create(
    <AuthProvider>
      <InventoryProvider>
        <EditInventoryScreen />
      </InventoryProvider>
    </AuthProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
