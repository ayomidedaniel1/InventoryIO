import React from "react";
import renderer from 'react-test-renderer';

import CreateInventoryScreen from "../../app/(public)/createInventory";

test('create inventory Screen renders correctly', () => {
  const tree = renderer.create(<CreateInventoryScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});