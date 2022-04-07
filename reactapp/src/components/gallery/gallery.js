import React from "react";
import styled from "styled-components";
import { data } from "./data";
import { GalleryItem } from "./gallery-item";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  @media only screen and (max-width: 735px) {
    gap: 3px;
  }
`;

export function Gallery() {
  return (
    <Grid>
      {data.map((item, id) => (
        <GalleryItem key={id} imagePath={item.imagepath} icon={item.icon} />
      ))}
     
    </Grid>
  );
}
