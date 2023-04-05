import React from 'react'
import styled, { keyframes } from 'styled-components'

function CardHover() {
        return (
                <CardDiv>
                        <CardInfoDiv>
                                <CardPara>
                                        Hover
                                </CardPara>
                        </CardInfoDiv>
                </CardDiv>
        )
}

const animat = keyframes`
  0% {
    background-position: 0px;
  }

  100% {
    background-position: 1000px;
  }
  `;

const CardDiv = styled.div`
width: 200px;
  height: 270px;
  background: linear-gradient(45deg,#0d8ede 25%,#ffff 25%, #0d8ede 25%, #0d8ede 50%,#ffff 50%,#ffff 75%, #0d8ede 75%, #0d8ede 100%);
  animation: ${animat} 15s linear infinite;
  transition: .3s;
  background-size: 60px 60px;
  position: relative;
  overflow: visible;
  border-radius: 20px;
`;

const CardInfoDiv = styled.div`
position: absolute;
  width: 96%;
  height: 96%;
  left: 2%;
  top: 2%;
  background-color: rgb(24, 22, 22);
  border-radius: 20px;
  transition: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
        width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.822);
  backdrop-filter: blur(12px);
  left: 20px;
  top: 20px;
  }
  `;

  const CardPara = styled.p`
  color: white;
  font-weight: bold;
  font-size: 30px;
  `;

  

export default CardHover