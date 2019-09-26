import React from 'react';
import Navbar from './Navbar';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const state = {
            picture: {
                cubes: false,
                shapes: true,
                spirals: false
            }, 

            sounds: {
                romance: false,
                deep: false,
                wild: true
            },

            text: {
                boring: true,
                funny: false,
                random: false
            },

            others: {
                make_favourite: false,
                toggleFavourites: false,
                currentFavourites: [],
                chosenFavorite: null
            },

            combinations: {
                picture: [0, 1, 2, 3],
                sounds: [0, 1, 2, 3],
                text: [0, 1, 2, 3]
            }
        }


    const tree = renderer
    .create(
        <Navbar 
            setPicture={() => {}} 
            setText={() => {}} 
            setSound={() => {}}
            setFavourites={() => {}}
            globalState={state}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});