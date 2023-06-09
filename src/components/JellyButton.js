import React from 'react'
import styled, { keyframes } from 'styled-components'

function JellyButton() {
  return (
    <>
<JellyButtonDiv>Button</JellyButtonDiv>
    </>
  )
}

const animation = keyframes`
0%{
  transform: scale(0.7, 1.3);
}
25%{
  transform: scale(1.3, 0.7);
}
50%{
  transform: scale(0.7, 1.3);
}
75%{
  transform: scale(1.3, 0.7);
}
100%{
  transform: scale(1,1);
}
`;

const JellyButtonDiv = styled.button`
padding : 15px 30px;
font-size: 18px;
outline: none;
border: none;
border-radius: 10px;
background: #1e1e1e;
color: greenyellow;
box-shadow: 0 0 10px #363636, inset 0 0 10px #363636;
transition: 0.5s;
&:hover{
  animation: ${animation} 0.5s 1 linear;
}
`;


export default JellyButton