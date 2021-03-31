import React, { Component } from 'react'
import { Home, User, Professional, CreateJob, NotFound } from 'pages'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as api from 'utils/api'



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
      case 'create-job': return CreateJob
      default: return NotFound
    }

  }
  

	render () {
    const SelectedPage = this.renderPage()

    return (
      <Container>
        <CssBaseline />
        
        <SelectedPage changePage={this.changePage} />
        
        
      </Container>
    )
    }
  }

export default App