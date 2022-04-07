import React from "react";
import styled from "styled-components";
import { DesktopOnly } from "../utils/mobile";
import * as Icons from "./icons";
import { useHistory } from "react-router-dom";

const Logo = styled.img`
  height: 29px;
`;
const NavContent = styled.div`
  max-width: 935px;
  margin: 0 auto;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 735px) {
    padding: 0 20px;
  }
`;
const SearchGuide = styled.div`
  width: 215px;
  background: var(--ins-background-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 26px;
  border-radius: 3px;
  border: 1px solid var(--ins-border-primary);
`;
const SearchPlaceholder = styled.span`
  color: var(--ins-mono-700);
  font-size: 14px;
  margin-left: 6px;
`;
const Mock = styled.div`
  height: 54px;
`;
const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--ins-background-primary);
  border-bottom: 1px solid var(--ins-border-primary);
  z-index: 1;
`;

export function Navigation({ lightThemeLogo, darkThemeLogo }) {
  const history = useHistory();

  return (
    <nav>
      <Mock></Mock>
      <Fixed>
        <NavContent>
         
          
          <DesktopOnly>
            <SearchGuide>
              <Icons.Search />
              {/* <span className="search-icon"></span> */}
              <SearchPlaceholder>Search</SearchPlaceholder>
            </SearchGuide>
          </DesktopOnly>
         
        </NavContent>
      </Fixed>
    </nav>
  );
}
Navigation.defaultProps = {
  lightThemeLogo: "/images/logo.png",
  darkThemeLogo: "/images/logo-white.png"
};
