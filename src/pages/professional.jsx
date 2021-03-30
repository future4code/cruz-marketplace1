import React, { Component } from 'react'
import { getAllJobs, takeJob, giveUpJob } from 'utils/api'

export class Professional extends Component {
  state = {
    jobs: [],
    isLoading: true
  }
  
  componentDidMount () {
    getAllJobs().then(r => {
      this.setState({ jobs: [...r.jobs], isLoading: false })
    })
  }

  render() {
    return (
      <div>
        <p>Pagina Professional</p>
        <button onClick={() => this.props.changePage('home')}>
          voltar para home
        </button>
        <ul>
          {this.state.jobs.map(job => (
            <li>
              {job.title}
              {job.description}
              {job.value}
              {job.taken}
              {job.paymentMethods}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}