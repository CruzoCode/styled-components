import React from 'react'
import styled from 'styled-components'

function DivTransformation() {
        return (
                <Rotate20Deg />
        )
}


const Rotate20Deg = styled.div`
width: 200px;
  height: 200px;
  position: relative;
  background: yellow;
&:hover{
        /* transform: rotate(20deg);   */
        /* transform: scale(0.8); */
        transform: skew(15deg, 10deg);
        /* transform: translate(10px, 5px); */
        /* transform: matrix(0,1,1,0,0,0); */
    transition: 550ms;
}
`;

export default DivTransformation