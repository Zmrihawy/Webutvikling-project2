import React from 'react';

import dec1 from '../../media/img/decoration/img1.jpg';
import dec2 from '../../media/img/decoration/img2.jpg';
import dec3 from '../../media/img/decoration/img3.jpg';
import dec4 from '../../media/img/decoration/img4.jpg';

import art1 from '../../media/img/art/p_1001165491.jpg';
import art2 from '../../media/img/art/maxresdefault.jpg';
import art3 from '../../media/img/art/maxresdefault (1).jpg';
import art4 from '../../media/img/art/eleven_below_single.svg';

import anim1 from '../../media/img/animation/giphy.gif';
import anim2 from '../../media/img/animation/giphy (1).gif';
import anim3 from '../../media/img/animation/safe_image.gif';
import anim4 from '../../media/img/animation/tumblr_n0i6g8rABP1rrr1sso1_500.gif';

import '../../stylesheets/Slide.css'

const Slideshow = (props) => {
  const { pictureState, combinationState } = props;
  let imgArr = [];

  let str = "";
  Object.keys(pictureState).forEach(key => {
    if (pictureState[key]) {
      str = key
    }
  })

  switch(str) {
    case "decoration":
      imgArr = [dec1, dec2, dec3, dec4];
      break;
    case "art":
      imgArr = [art1, art2, art3, art4];
      break;
    case "animation":
      imgArr = [anim1, anim2, anim3, anim4];
      break;
    default:
      console.log("Critical error! Picture state not recognized")
  }

  console.log(props)

  console.log("showing: " + imgArr[combinationState]);

    return (
        <div className="containerSlide">
          <img src={imgArr[combinationState]} alt="img1" className="image" />
        </div>
    )
}

export default Slideshow
