import React from 'react';

import dec1 from '../../media/img/cubes/cubes_1.svg';
import dec2 from '../../media/img/cubes/cubes_2.svg';
import dec3 from '../../media/img/cubes/cubes_3.svg';
import dec4 from '../../media/img/cubes/cubes_4.svg';

import art1 from '../../media/img/shapes/shapes_1.svg';
import art2 from '../../media/img/shapes/shapes_2.svg';
import art3 from '../../media/img/shapes/shapes_3.svg';
import art4 from '../../media/img/shapes/shapes_4.svg';

import anim1 from '../../media/img/spirals/spiral_cat_1.svg';
import anim2 from '../../media/img/spirals/spiral_cat_2.svg';
import anim3 from '../../media/img/spirals/spiral_cat_3.svg';
import anim4 from '../../media/img/spirals/spiral_cat_4.svg';


import '../../stylesheets/Slide.css'

const PictureDisplayContainer = (props) => {
  const { pictureState, combinationState } = props;
  let imgArr = [];

  let str = "";
  Object.keys(pictureState).forEach(key => {
    if (pictureState[key]) {
      str = key
    }
  })

  switch(str) {
    case "cubes":
      imgArr = [dec1, dec2, dec3, dec4];
      break;
    case "shapes":
      imgArr = [art1, art2, art3, art4];
      break;
    case "spirals":
      imgArr = [anim1, anim2, anim3, anim4];
      break;
    default:
      console.log("Critical error! Picture state not recognized")
  }

    return (
        <div className="containerSlide">
          <img src={imgArr[combinationState]} alt="Select a category." className="image" />
        </div>
    )
}

export default PictureDisplayContainer;
