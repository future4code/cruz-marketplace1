// Atencao, nosso projeto esta com paths absolutos ativado
// se estivermos em uma pasta em components, nao precisa usar: ../../../
// Pode usar o path absoluto 'components' em qualquer lugar se quiser, blz?

import React, { Component } from 'react'
// Importado com o uso do arquivo index no pages, veja pages/index.js
import { Home, User, Professional, CreateJob, NotFound } from 'pages'
import theme from 'styles/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as api from 'utils/api'
import Footer from "./components/layout/footer"
import Home from "./pages/home";


class App extends Component {
  state = { page: 'user'}
  
  changePage = page => this.setState({ page })
  
  // Escolher a pagina conforme o texto no state.page
  // Sempre colocar o texto igual no arquivo, separado por -, ex: pagina-inial
  renderPage = () => {
    switch (this.state.page) {
      case 'home': return Home
      case 'user': return User
      case 'professional': return Professional
      case 'create-job': return CreateJob
      default: return NotFound
    }
  }
  render() {
    console.log(`Theme Config`, theme)
    const SelectedPage = this.renderPage()

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          {/* <select name="page" id="page"
            onChange={(e) => this.setState({ page: e.target.value })}
          >
            <option value="home">Home</option>
            <option value="user">User</option>
            <option value="professional">Professional</option>
            <option value="create-job">CreateJob</option>
            <option value="notfound">NotFound</option>
          </select> */}
        <SelectedPage changePage={this.changePage} />
        </Container>
      </ThemeProvider>
    )
    
    }
  }

export default App