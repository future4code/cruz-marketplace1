import React, { Component } from 'react'
import { Home, User, Professional, RegistrationPage, NotFound } from 'pages'
import theme from 'styles/theme'
import { ThemeProvider } from '@material-ui/styles'
import * as api from 'utils/api'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import '@fontsource/roboto'

class App extends Component {
  state = { page: 'home'}
  
  componentDidMount () {
    api.getAllJobs()
    .then(r => console.log(r))
  }
  
  changePage = page => this.setState({ page })
  
  renderPage = () => {
    switch (this.state.page) {
      case 'home': return Home
      case 'user': return User
      case 'professional': return Professional
      case 'create-job': return RegistrationPage
      default: return NotFound
    }

  }
  

	render () {
    console.log(`Theme Config`, theme)
    const SelectedPage = this.renderPage()

    return (
      <ThemeProvider>
        <CssBaseline />
        <Container>
          <SelectedPage changePage={this.changePage} />
        </Container>
      </ThemeProvider>
    )
    }
  }

export default App