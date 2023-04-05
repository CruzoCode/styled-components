import React from "react";
import styled from "styled-components";

function HappyEaster() {
  return (
    <div>
      <SceneDiv>
        <CubeDiv>
          <SideTopSpan>Easter</SideTopSpan>
          <SideFrontSpan>Happy</SideFrontSpan>
        </CubeDiv>
      </SceneDiv>
    </div>
  );
}

const SceneDiv = styled.div`
  width: 10em;
  justify-content: center;
  align-items: center;
`;

const CubeDiv = styled.div`
  color: #ccc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  transition: all 0.85s cubic-bezier(0.17, 0.67, 0.14, 0.93);
  transform-style: preserve-3d;
  transform-origin: 100% 50%;
  width: 10em;
  height: 4em;
  &:hover {
    transform: rotateX(-90deg);
  }
`;

const SideTopSpan = styled.span`
  box-sizing: border-box;
  position: absolute;
  display: inline-block;
  height: 4em;
  width: 10em;
  text-align: center;
  text-transform: uppercase;
  padding-top: 1.5em;
  font-weight: bold;
  background: wheat;
  color: #222229;
  transform: rotateX(90deg) translate3d(0, 0, 2em);
  box-shadow: inset 0 0 0 5px #fff;
`;

const SideFrontSpan = styled.span`
  box-sizing: border-box;
  position: absolute;
  display: inline-block;
  height: 4em;
  width: 10em;
  text-align: center;
  text-transform: uppercase;
  padding-top: 1.5em;
  font-weight: bold;
  background: #222229;
  color: #fff;
  box-shadow: inset 0 0 0 5px #fff;
  transform: translate3d(0, 0, 2em);
`;

export default HappyEaster;
