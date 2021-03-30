import React, { Component } from 'react'
import { Home, User, Professional, CreateJob, NotFound } from 'pages'


class App extends Component {
  state = { page: 'home'}
  
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
      <div>
        <select name="page" id="page"
          onChange={(e) => this.setState({ page: e.target.value })}
        >
          <option value="home">Home</option>
          <option value="user">User</option>
          <option value="professional">Professional</option>
          <option value="create-job">CreateJob</option>
          <option value="notfound">NotFound</option>
        </select>

        <SelectedPage changePage={this.changePage} />
       
      </div>
    )
    }
  }

export default App
