import React from "react";
import { TypeAnimation } from 'react-type-animation';

function HomeTitle() {
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        "So it's not Shounen..?",
        1000,
        "So it's for girls..?",
        1000,
        "So just gonna be another love story..?",
        1000,
        "So it's Shoujo.",
        1000,
      ]}
      speed={20} // Custom Speed from 1-99 - Default Speed: 40
      // style={{ fontSize: '7em' }}
      wrapper="span" // Animation will be rendered as a <span>
      repeat={0} // Repeat this Animation Sequence infinitely
    />
  );
}

export default HomeTitle;