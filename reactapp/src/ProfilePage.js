import React from "react";
import styled from "styled-components";
import { Gallery } from "./components/gallery";
import { Navigation } from "./components/navigation";
import { Profile } from "./components/profile";
import { Tabs } from "./components/tabs";



const Main = styled.main`
  padding: 30px 20px 0px 20px;
  max-width: 935px;
  margin: 0 auto;
  @media only screen and (max-width: 735px) {
    padding: 0;
  }
`;

export function ProfilePage() {


  return (
    <div>
      <Navigation />
      <Main>
        <Profile />
        <Tabs />
        <Gallery />
      </Main>
     
   </div>
  );
}
