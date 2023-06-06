import styled, { css } from "styled-components";

export const RepricerButton = styled.button`
  --w: 6em;
  --bg: rgb(var(--rgb));
  --bga: rgba(var(--rgb), 0.4); /* Safari fix */
  -webkit-appearance: none;
  border: none;
  font-size: 100%;
  width: var(--w);
  height: var(--w);
  background: var(--bg);
  box-shadow: 0 3px 12px 2px var(--bga);
  border-radius: 50%;
  margin-top: -42px;
  margin-left: 24px;
  bottom: 60px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.1s transform, 0.3s box-shadow;
  will-change: transform, box-shadow;
  backface-visibility: hidden;

  > * {
    pointer-events: none;
  }
  &:hover {
    box-shadow: 0px 8px 15px 2px var(--bga);
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.92);
  }

  &:after {
    --bg: rgb(var(--rgb));
    content: "";
    position: absolute;
    top: -15%;
    left: -15%;
    width: 200%;
    height: 200%;
    background: var(--bg);
    border-radius: inherit;
    transform: translate(5%, 5%) scale(0.05);
    pointer-events: none;
  }

  &.animating {
    &:after {
      animation: c 0.5s cubic-bezier(0.5, 0, 0.5, 1) backwards;
    }
  }

  &.active {
    --rgb: 64, 227, 120;
  }

  ${(props) =>
    !props.active &&
    css`
      :after {
        --rgb: 64, 227, 120;
      }
    `}

  ${(props) =>
    !props.active &&
    css`
       {
        --rgb: 10, 61, 176;
      }
    `}
  ${(props) =>
    props.active &&
    css`
      :after {
        --rgb: 10, 61, 176;
      }
    `}

    /*starting position of the v-line*/
  span {
    display: inline-block;
    position: relative;
    margin-top: 5px;
  }

  /*vertical line*/
  b {
    --w: 7px;
    overflow: hidden;
    border-radius: var(--w);
    display: grid;
    width: var(--w);
    height: 35px;
    top: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    will-change: transform;
    z-index: 99;

    &:before {
      content: "";
      background: #fff;
      width: 100%;
      height: 100%;
      border-radius: var(--w);
      transform: translateY(-15px);
      transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 0.5s;
    }
  }

  &.active {
    b {
      &:before {
        transform: translateY(12px);
        transition-delay: 0.27s;
        transition-timing-function: cubic-bezier(0.25, 0.25, 0.25, 1.25);
      }
    }
  }

  svg {
    --dash: 190;
    stroke-linecap: round;
    stroke-dasharray: var(--dash);
    stroke-dashoffset: var(--dash);
    width: 46px;
    height: 46px;
    transform: scaleX(-1) rotate(-80deg);
    transition: 0.4s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    margin: auto;
    position: relative;
    z-index: 1;
    will-change: transform, stroke-dashoffset;
  }
  &:not(.active) svg {
    stroke-dashoffset: 41;
    transform: scaleX(-1) rotate(-52deg);
    transition: 0.5s 0.25s;
  }
`;
