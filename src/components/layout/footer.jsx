import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
background: rgb(49,49,49);
width: 100%;
height: 100px;
position: absolute;
bottom: 0;
left: 0;
`
export default class Footer extends React.Component{

    render(){

        return(

            <FooterContainer>
                <p>Feito com amor </p>
            </FooterContainer>

        )
    }
}