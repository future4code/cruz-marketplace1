import React, { Component } from 'react'
import { Home, User, Professional, RegistrationPage, NotFound } from 'pages'
import theme from 'styles/theme'
import { ThemeProvider } from '@material-ui/styles'
import styled from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import '@fontsource/roboto'
import Footer from 'components/layout/footer'

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

class App extends Component {
  state = { page: 'home'}
  
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainContainer>
          <SelectedPage changePage={this.changePage} />
          <Footer />
        </MainContainer>
      </ThemeProvider>
    )
    }
  }

export default App