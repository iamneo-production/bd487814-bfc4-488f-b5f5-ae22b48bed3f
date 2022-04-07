import React from "react";
import styled, { css } from "styled-components";
import { TabItem } from "./tab-item";

const TabsWrap = styled.div`
  border-top: 1px solid var(--ins-border-primary);
  display: flex;
  justify-content: center;
  background: var(--ins-background-primary);
  @media only screen and (max-width: 735px) {
    justify-content: space-around;
    height: 44px;
    align-items: center;
    border-top: 1px solid var(--ins-border-primary);
  }
`;

export function Tabs() {
  return (
    <TabsWrap>
      <TabItem active label="POSTS" icon="Posts" />
     
    </TabsWrap>
  );
}
