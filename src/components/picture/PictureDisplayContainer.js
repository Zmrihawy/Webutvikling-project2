import React, { Component } from "react";

import "../../stylesheets/Slide.css";

let dec1 = "media/img/cubes/cubes_1.svg";
let dec2 = "media/img/cubes/cubes_2.svg";
let dec3 = "media/img/cubes/cubes_3.svg";
let dec4 = "media/img/cubes/cubes_4.svg";

let art1 = "media/img/shapes/shapes_1.svg";
let art2 = "media/img/shapes/shapes_2.svg";
let art3 = "media/img/shapes/shapes_3.svg";
let art4 = "media/img/shapes/shapes_4.svg";

let anim1 = "media/img/spirals/spiral_cat_1.svg";
let anim2 = "media/img/spirals/spiral_cat_2.svg";
let anim3 = "media/img/spirals/spiral_cat_3.svg";
let anim4 = "media/img/spirals/spiral_cat_4.svg";

/**
 * Component for displaying pictures. Fetches content dynamically
 * using ajax.
 */
class PictureDisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureSrc: null
    };
  }

  isPictureStateEqual(obj1, obj2) {
    return (
      obj1.cubes === obj2.cubes &&
      obj1.spirals === obj2.spirals &&
      obj1.shapes === obj2.shapes
    );
  }


  /**
   * Check if props have changed, then update image acordingly
   */
  componentDidUpdate(prevProps) {
    const { pictureState, combinationState } = this.props;

    if (
      !this.isPictureStateEqual(pictureState, prevProps.pictureState) ||
      combinationState !== prevProps.combinationState
    ) {
      let imgArr = [];
      let str = "";
      // Get the active category
      Object.keys(pictureState).forEach(key => {
        if (pictureState[key]) {
          str = key;
        }
      });

      switch (str) {
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
          console.log("Critical error! Picture state not recognized");
      }
      if (imgArr[combinationState] !== null && imgArr[combinationState] !== undefined) {
        this.setState({ pictureSrc: "Loading" });
        fetch(imgArr[combinationState])
          .then(res => {
            return res.text();
          })
          .then(res => {
            this.setState({ pictureSrc: res });
          });
      } else {
        this.setState({ pictureSrc: "Please choose an image to display" });
      }

    }
  }

  render() {
    const { pictureSrc } = this.state;

    return (
      <div className="containerSlide">
        {pictureSrc == null ? (
          <div> Please choose an image to display </div>
        ) : (
          <div
            className="image"
            dangerouslySetInnerHTML={{ __html: pictureSrc }}
          />
        )}
      </div>
    );
  }
}

export default PictureDisplayContainer;
