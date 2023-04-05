import React from 'react'
import styled from 'styled-components'

function TryComponent() {
        return (
                <>
                        <FirstDiv />
                        <SecondDiv className='second'/>
                </>
        )
}

const SecondDiv = styled.div`
width: 100px;
height: 100px;
background-color: red;
`;

const FirstDiv = styled.div`
width: 100px;
height: 100px;
background-color: yellow;
${SecondDiv}:hover&{
display: none;
}
`;



export default TryComponent