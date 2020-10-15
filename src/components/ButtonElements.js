import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  border-radius: 50px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : " white")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: point;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    color: ${({ dark }) => (dark ? "white" : " #010606")};
    cursor: pointer;
  }
`;
