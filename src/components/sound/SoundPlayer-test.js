import React from "react";
import SoundPlayer from "./SoundPlayer";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  let sounds = {
    romance: false,
    deep: true,
    wild: false
  };
  const tree = renderer
    .create(<SoundPlayer soundState={sounds} combinationState={1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
