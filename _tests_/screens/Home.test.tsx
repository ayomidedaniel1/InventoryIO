import React from "react";
import renderer from 'react-test-renderer';

import HomeScreen from "../../app/(public)/home";

test('HomeScreen renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
