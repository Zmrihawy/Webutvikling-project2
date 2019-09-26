import React from 'react';
import PictureDisplayContainer from './PictureDisplayContainer';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    let picture = {
        cubes: false,
        shapes: true,
        spirals: false
    }
  const tree = renderer
    .create(<PictureDisplayContainer pictureState={picture} combinationState={1}></PictureDisplayContainer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
