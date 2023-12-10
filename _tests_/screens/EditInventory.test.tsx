import React from "react";
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-toast', () => ({
  show: jest.fn(),
}));

import EditInventoryScreen from "../../app/(public)/editInventory";

test('Edit screen renders correctly', () => {
  const tree = renderer.create(<EditInventoryScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
