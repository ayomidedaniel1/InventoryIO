import React from "react";
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-toast', () => ({
  show: jest.fn(),
}));

import CreateInventoryScreen from "../../app/(public)/createInventory";

test('create inventory Screen renders correctly', () => {
  const tree = renderer.create(<CreateInventoryScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});