import * as React from "react";
import styled from "styled-components";
import * as Icons from "../icons";

const Wrap = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
const Icon = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export function GalleryItem({ imagePath, icon }) {
  const IconComp = Icons[icon];
  console.log("imagePath - GalleryItem", imagePath);
  return (
    <Wrap>
      <Img alt="gallery-post" src={imagePath} />
      <Icon>
        {icon && <IconComp />}
        {/* <span className="media-icon"></span> */}
      </Icon>
    </Wrap>
  );
}
GalleryItem.defaultProps = {
  imagePath: "/images/transparent.png",
  icon: ""
};
