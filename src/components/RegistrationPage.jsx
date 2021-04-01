import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import LogoName from '../images/LogoComNome.svg'
import LogoNinja from '../images/LogoNinja.svg'
import { createJob } from 'utils/api'


export default class RegistrationPage extends React.Component {
  state = {
    inputs: {
      title: '',
      value: 0
    }
  }

  criarJob = () => {
    createJob(this.state.input)
  }

    render () {

        return (
            <Container>
                <header>
                    <img src={LogoName}/>
                    <Button variant="contained" color="secondary">Voltar</Button>
                </header>
                
                <h1>Cadastre um serviço</h1>
                
                <form action="post">
                    <Span>
                    <input required type="text"/>
                    <label htmlFor="">Título</label>
                    </Span>

                    <Span>
                    <input required type="text"/>
                    <label htmlFor="">Descrição</label>
                    </Span>

                    <Span>
                    <select required>
                        <option value="">Escolha uma opção</option>
                        <option value="">Boleto</option>
                        <option value="">PIX</option>
                        <option value="">Cartão</option>
                    </select>
                    <label htmlFor="">Forma de pagamento</label>
                    </Span>

                    <Span>
                    <input required type="text"/>
                    <label htmlFor="">Prazo</label>
                    </Span>

                    <Span>
                    <input required type="number"/>
                    <label htmlFor="">Valor</label>
                    </Span>
                    
                    <Button variant="contained" color="secondary">Cadastrar</Button>
                </form>
                
                <LogoNinjaImg src={LogoNinja} alt="Logo Ninja"/>
                
                {/* footer */}
            </Container>
        )
    }
}

const Container = styled.div`
max-width: 1366px;
height: 100vh;
background-color: #f4f4f4;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 2%;

    img {
        width: 170px;
    }
}

h1 {
    margin-top: 0;
}

form {
    width: 40%;
    min-width: 370px;
    height: 62%;
    max-height: 460px;
    background-color: #A185DB;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 20px;
    font-weight: 600;
    color: rgba(0,0,0,.7);
    z-index: 1;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);


    input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 5px;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

        :focus ~ Label, :valid ~ Label {
        font-weight: 600;
        left: 0;
        transform: translateY(-37px);
        color: #000;
        }
    }

    label {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        pointer-events: none;
        transition: .3s;
    }

    select {
        width: 100%;
        height: 100%;
        outline: none;
        color: #fff;
        transition: .3s;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

        :focus, :valid {
            color: #000;
        }

        :focus ~ Label, :valid ~ Label {
        font-weight: 600;
        left: 0;
        transform: translateY(-37px);
        color: #000;
        }
    }
}
`
const LogoNinjaImg = styled.img`
position: absolute;
bottom: -50px;
right: -130px;
height: 600px;
width: 500px;
opacity: .2;
`
const Span = styled.span`
position: relative;
width: 70%;
height: 30px;   
`