import React from "react";
import styled, { css } from "styled-components";
import { DesktopOnly, MobileOnly } from "../../utils/mobile";
import * as Icons from "../icons";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  color: var(--ins-content-primary);

  ${({ active }) =>
    active &&
    css`
      border-top: 1px solid var(--ins-content-secondary);
      margin-top: -1px;
      color: var(--ins-content-secondary);
      color: red;
      @media only screen and (max-width: 735px) {
        border-top: none;
      }
    `}
`;
const Span = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--ins-mono-700);
  margin-left: 6px;
`;

export function TabItem({ active, icon, label }) {
  const IconComp = Icons[icon];

  return (
    <>
      <DesktopOnly>
        <Wrap
          active={active}
          style={{
            marginRight: 60
          }}
        >
          <div className="light-theme-only">
            <IconComp />
          </div>
          <div className="dark-theme-only">
            <IconComp
              fill={
                active
                  ? "var(--ins-content-primary)"
                  : "var(--ins-content-secondary)"
              }
            />
          </div>
          <Span>{label}</Span>
        </Wrap>
      </DesktopOnly>
      <MobileOnly>
        <IconComp
          size={24}
          fill={active ? "var(--ins-primary)" : "var(--ins-content-secondary)"}
        />
        {/* 
        {React.cloneElement(<IconComp />, {
          size: 24,
          fill: active ? "rgb(0, 149, 246)" : "#8e8e8e"
        })} */}
      </MobileOnly>
    </>
  );
}

TabItem.defaultProps = {
  active: false,
  icon: "Posts",
  label: "POSTS"
};
