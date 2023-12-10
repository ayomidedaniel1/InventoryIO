import React from "react";
import renderer from 'react-test-renderer';

import EditInventoryScreen from "../../app/(public)/editInventory";

test('Edit screen renders correctly', () => {
  const tree = renderer.create(<EditInventoryScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
