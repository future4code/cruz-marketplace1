import React from "react"
import styled from "styled-components"
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const FooterContainer = styled.div`
background-color: rgb(49,49,49);
display: flex;
justify-content: center;
align-items: center;
height: 100px;
color:white;
padding:15px;
flex-direction:column;
align-self:flex-end;
z-index: 1;
`


export default class Footer extends React.Component{

    render(){

        return(

            <FooterContainer>
                <p>Desenvolvido com <FavoriteBorderIcon fontSize="small"/></p>
                <Link  color= "inherit" href="https://github.com/future4code/cruz-marketplace1">
                <GitHubIcon fontSize="large"/>
                </Link> 
           
           </FooterContainer>
            

        )
    }
}