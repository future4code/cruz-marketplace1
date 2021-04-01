//import { styled } from '@material-ui/core'
import React, { Component } from 'react'
import HomeImage from "../images/homeImage.png"
import styled from "styled-components"
import Header from "../components/layout/header"
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {getAllJobs} from "utils/api"


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

  state={
    inputValue:"",
    jobList:[]
  }
  

  onChangePesquisa=(event)=>{
    this.setState({inputValue:event.target.value})

  }

  pesquisar=()=>{
    this.props.changePage('professional', this.state.inputValue)
  }

  componentDidMount() {
    getAllJobs().then((result) => {
      this.setState({ jobList: result.jobs});
    });
  }

  render(){
    console.log(this.state.inputValue);
  
  const listJobs = this.state.jobList.map((job) => {
    return <p>{job.title}</p>
  });
console.log("nome do job:" + listJobs)
  return (     
      <div>
        <Header page={this.props.changePage} />
          <HomeContainer>
            <ChamadaHome>
              <p> Milhares de <span>profissionais</span><br/>prontos 
              para começar a <br/>trabalhar no seu projeto</p>
                <div>
                  <input 
                  value={this.state.inputValue} 
                  placeholder="Digite o que você precisa! ;)"
                  onChange={this.onChangePesquisa}
                  />
                  <Button
                variant="contained"
                color="primary"
                startIcon={<SearchIcon color="disabled"/>}
                fontSize="large"
                onClick={this.pesquisar}>Pesquisar</Button>
                </div>
               
            </ChamadaHome>
               <img src={HomeImage} alt='logo' /> 
          </HomeContainer>
        {/* <Footer/> */}
      </div>
    )
  }
}