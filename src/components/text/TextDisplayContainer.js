import React from 'react';
import texts from '../../media/txt/texts.json';

import TextDisplay from './TextDisplay';

const TextDisplayContainer = (props) => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  const { textState } = props;  

  // Get keys that has true value
  let key = Object.keys(textState).filter(key => (
    textState[key]));

  if (key.length > 1) {
    console.log("Critical error! Active text is more than one")
  }

  // If there is an active text, extract it, else set to empty string
  let text = key.length == 1 ? texts[key[0]][getRandomInt(4)] : "";
  console.log(key[0])
  console.log(textState[key[0]])
  console.log(texts)
  console.log("her")
  console.log(texts[key[0]])

  return (
  <div>
    <TextDisplay text={text}/>
  </div>
)}

export default TextDisplayContainer;
