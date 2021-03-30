import React from "react"
import styled from "styled-components"
import Logo from "components/img/logo.png"
import Button from '@material-ui/core/Button';

const HeaderContainer = styled.div`
background-color:rgb(B7,B7,B7);
background-color:rgb(24,24,24);
padding: 10px 0;
justify-content:center;
align-items:center;
`

const Logotipo = styled.img`
height:80px;
width:80px;
margin-left: 20px;

`

export default class Header extends React.Component{
    render(){
        return(
            <HeaderContainer>
            <Logotipo src={Logo} alt="logo future ninja"/>
                <Button variant="contained" color="primary">{"Contratante"}</Button>
                <Button variant="contained" color="secondary">{"Profissional"}</Button>
           </HeaderContainer>
        )
    }

}





