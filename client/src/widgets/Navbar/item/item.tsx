import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  &.active {
    color: #9c27b0;
  }
`;

interface ItemProps {
  label: string;
  link: string;
}

export const Item: React.FC<ItemProps> = ({ label, link }) => {
  return (
    <li>
      <StyledNavLink to={link}>{label}</StyledNavLink>
    </li>
  );
};
