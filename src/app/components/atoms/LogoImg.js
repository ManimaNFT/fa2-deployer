import React from "react";

import "./LogoImg.css";
import Image from "react-bootstrap/Image";

const LogoImg = () => {
  return (
    <>
      <Image
        src="https://pbs.twimg.com/profile_images/1017374364227047425/gc6a6fGi.jpg"
        roundedCircle
        className="img-md "
      />
    </>
  );
};

export default LogoImg;
