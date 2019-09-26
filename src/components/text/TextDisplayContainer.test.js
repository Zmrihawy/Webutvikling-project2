import React from 'react';
import TextDisplayContainer from './TextDisplayContainer';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    let text = {
        boring: false,
        funny: true,
        random: false
    }
  const tree = renderer
    .create(<TextDisplayContainer textState={text} combinationState={1}></TextDisplayContainer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});