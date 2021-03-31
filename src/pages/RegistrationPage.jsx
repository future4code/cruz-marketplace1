import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import LogoName from "../images/LogoComNome.svg";
import LogoNinja from "../images/LogoNinja.svg";
import { createJob } from "../utils/api";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Footer from "components/layout/footer";

const defaultValues = {
    title: "",
    description: "",
    value: "",
    paymentMethods: [],
    dueDate: "",
  }

export class RegistrationPage extends React.Component {
  state = defaultValues

  alertJob = {
      open: false,
      type: 'success',
      message: 'Serviço cadastrado com sucesso!'
  }

  handleInput = (e) => {
    const { value, name } = e.target;

    if (name === "paymentMethods") {
      this.setState({ [name]: [value] });
    } else {
      this.setState({ [name]: value });
    }
  };

  onClickJob = () => {
    if (
      this.state.title &&
      this.state.description &&
      this.state.value &&
      this.state.dueDate &&
      this.state.paymentMethods
    ) {
      createJob(this.state).then()
      this.setState(defaultValues)
      this.showAlert('success', 'Serviço cadastrado com sucesso!')
    } else {
      this.showAlert('warning', 'Por favor preencha todos os campos!')
    }
  };

  showAlert = (type, message) => {
      this.alertJob = {open: true, type, message}
      this.forceUpdate()
  }

  closeAlert = () => {
      this.alertJob.open = false
      this.forceUpdate()
  }

  render() {
    return (
      <Container>
        {this.alertJob.open &&
          <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={this.alertJob.open}  autoHideDuration={3000} onClose={this.closeAlert}>
            <MuiAlert elevation={6} variant="filled" onClose={this.closeAlert} severity={this.alertJob.type}>
              {this.alertJob.message}
            </MuiAlert>
          </Snackbar>}
        <header>
          <img src={LogoName} />
          <Button onClick={() => this.props.changePage('home')} variant="contained" color="secondary">
            Voltar
          </Button>
        </header>

        <h1>Cadastre um serviço</h1>

        <form>
          <Span>
            <input
              value={this.state.title}
              onChange={this.handleInput}
              name="title"
              required
              type="text"
            />
            <label>Título</label>
          </Span>

          <Span>
            <input
              value={this.state.description}
              onChange={this.handleInput}
              name="description"
              required
              type="text"
            />
            <label>Descrição</label>
          </Span>

          <Span>
            <select
              value={this.state.paymentMethods[0]}
              onChange={this.handleInput}
              name="paymentMethods"
              required
            >
              <option value="">Escolha uma opção</option>
              <option value="boleto">Boleto</option>
              <option value="pix">PIX</option>
              <option value="cartão">Cartão</option>
            </select>
            <label>Forma de pagamento</label>
          </Span>

          <Span>
            <input
              value={this.state.dueDate}
              onChange={this.handleInput}
              name="dueDate"
              required
              type="text"
            />
            <label>Prazo</label>
          </Span>

          <Span>
            <input
              value={this.state.value}
              onChange={this.handleInput}
              name="value"
              required
              type="text"
            />
            <label>Valor</label>
          </Span>

          <Button
            onClick={this.onClickJob}
            variant="contained"
            color="secondary"
          >
            Cadastrar
          </Button>
        </form>

        <LogoNinjaImg src={LogoNinja} alt="Logo Ninja" />

        {/* <Footer/> */}
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 1366px;
  height: 100vh;
  /* background-color: #f4f4f4; */
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
    min-width: 340px;
    height: 62%;
    max-height: 460px;
    background-color: #a185db;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 20px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding: 0 5px;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

      :focus ~ Label,
      :valid ~ Label {
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
      transition: 0.3s;
    }

    select {
      width: 100%;
      height: 100%;
      outline: none;
      color: #fff;
      transition: 0.3s;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

      :focus,
      :valid {
        color: #000;
      }

      :focus ~ Label,
      :valid ~ Label {
        font-weight: 600;
        left: 0;
        transform: translateY(-37px);
        color: #000;
      }
    }
  }
`;
const LogoNinjaImg = styled.img`
  position: absolute;
  bottom: -50px;
  right: -130px;
  height: 600px;
  width: 500px;
  opacity: 0.2;
`;
const Span = styled.span`
  position: relative;
  width: 70%;
  height: 30px;
`;
