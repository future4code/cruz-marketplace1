//import { styled } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import HomeImage from "../images/homeImage.png"
import styled from "styled-components"
import Footer from "../components/layout/footer"
import Header from "../components/layout/header"
import SearchIcon from '@material-ui/icons/Search';



const HomeContainer = styled.div`
display:flex;
flex-direction:row;
height:65vh;
max-width: 1280px;
margin: 0 auto;

img{
  margin-top:10px;
  margin-left: 25px;
}
`

const ChamadaHome = styled.div`
font-size: 45px;
padding-left:25px;
font-weight:bold;
margin-top:35px;

span{
  color:#E02867;
}

div{
  display:flex;
  justify-content:center;
  align-items:center;
}

div > input{
  width:70%;
  margin-left:50px;
  border-radius:20px;
  padding:3%;
  border:none;
  background-color:#B7B7B7;
  font-size:20px;

}

`
export class Home extends Component {
  render() {
    return (     
      <div>
          <Header page={this.props.changePage} />
          <HomeContainer>
            <ChamadaHome>
              <p> Milhares de <span>profissionais</span><br/>prontos 
              para começar a <br/>trabalhar no seu projeto</p>
                <div>
                  <input placeholder="Digite o que você precisa! ;)"/>
                  <SearchIcon fontSize="large"/>
                </div>
            </ChamadaHome>
               <img src={HomeImage}/> 
          </HomeContainer>
        {/* <Footer/> */}
      </div>
    )
  }
}