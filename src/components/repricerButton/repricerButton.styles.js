import { Box } from "@mui/material";
import styled from "styled-components";

export const RepricerButtonContainer = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: row;
  z-index: 99;
  //top: 75px;
  left: 100px;
  /* margin-top: -28px;
  margin-bottom: 28px;
  margin-left: calc(33.3% - 350px); */
`;

export const RepricerPowerButton = styled.button`
  position: relative;
  float: left;
  width: 70px;
  height: 70px;
  top: -10px;
  left: -22px;
  border: none;
  border-radius: 50%;
  background: rgb(231, 231, 231);
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZGZkZmQiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
  box-shadow: inset 0 5px 1px -1px #f0f0f0, inset 0 -3px 1px 1px #c3c3c3,
    0 3px 5px 0 rgba(0, 0, 0, 0.7);
  color: ${({ active }) => (active ? "#1976D2" : "#bbb9b7")};
  text-align: center;
  font-size: 40px;
  line-height: 70px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: #1976d2;
  }

  &::after {
    position: absolute;
    top: -15px;
    left: -15px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: -webkit-linear-gradient(
      top,
      rgba(25, 118, 210, 0) 5%,
      rgba(14, 110, 205, 0) 42%,
      rgba(14, 110, 205, 0) 44%,
      rgba(2, 89, 175, 1) 100%
    );
    background: -moz-linear-gradient(
      top,
      rgba(25, 118, 210, 0) 5%,
      rgba(14, 110, 205, 0) 42%,
      rgba(14, 110, 205, 0) 64%,
      rgba(2, 89, 175, 1) 100%
    );
    background-position: ${({ active }) =>
      active ? "0px 100px" : "0px 250px"};
    background-size: 100px 450px;
    box-shadow: inset 0 1px 3px 0px rgba(0, 0, 0, 0.6), 0 1px 2px 0 #fff;
    content: "";
    transition: background-position 1s ease;
    z-index: -1;
  }

  /* &:hover {
    &::after {
      background-position: 0px 260px;
    }
  } */
`;

export const ImageBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
