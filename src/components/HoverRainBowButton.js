import React from 'react'
import styled, { keyframes } from 'styled-components'

function HoverRainBowButton() {
        return (
                <div>
                        <Button>Hover Me</Button>
                </div>
        )
}

const animate = keyframes`
to {
    background-position: var(--width);
  }
`;

const Button = styled.button`
--width: 150px;
  --timing: 2s;
  border: 0;
  width: var(--width);
  padding-block: 1em;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  background: rgb(64, 192, 87);
  transition: all 0.2s;
  border-radius: 3px;
  &:hover{
        background-image: linear-gradient(to right, rgb(250, 82, 82), rgb(250, 82, 82) 16.65%, rgb(190, 75, 219) 16.65%, rgb(190, 75, 219) 33.3%, rgb(76, 110, 245) 33.3%, rgb(76, 110, 245) 49.95%, rgb(64, 192, 87) 49.95%, rgb(64, 192, 87) 66.6%, rgb(250, 176, 5) 66.6%, rgb(250, 176, 5) 83.25%, rgb(253, 126, 20) 83.25%, rgb(253, 126, 20) 100%, rgb(250, 82, 82) 100%);
  animation: var(--timing) linear ${animate} infinite;
  transform: scale(1.1) translateY(-1px);
  }
`;

export default HoverRainBowButton