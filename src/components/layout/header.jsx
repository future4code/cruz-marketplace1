import React from "react"
import styled from "styled-components"
import Logo from "../../images/LogoComNome.svg"
import Button from '@material-ui/core/Button';

const HeaderContainer = styled.div`
display:flex;
background-color:rgb(B7,B7,B7);
height: 100px;
justify-content:space-between;
align-items:center;
max-width: 1280px;
margin: 0 auto;

`
const ButtonContainer = styled.div `
display:flex;
margin-right: 25px;
 div{
     margin-right: 25px;
 }
`
const Logotipo = styled.img`
width:170px;
margin-left: 35px;

`
export default class Header extends React.Component{
    render(){
        return(
            <HeaderContainer>
            <Logotipo src={Logo} alt="logo future ninja"/>
                <ButtonContainer>
                   <div> 
                       <Button onClick= {() => this.props.page('user')}variant="contained" color="secondary">{"Contratante"}</Button>
                       </div>
                    <div><Button onClick={() => this.props.page('professional')}variant="contained" color="primary">{"Profissional"}</Button></div>
                </ButtonContainer>    
          </HeaderContainer>
        )
    }

}





