import React, { Component } from 'react'
import { getAllJobs, takeJob, giveUpJob } from 'utils/api'
import styled from 'styled-components'


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: purple;
`

const Header = styled.div`
  height: 100px;
  background: red;
`

const ContentWraper = styled.div`
  padding: 0 140px;
`

const SubHeader = styled.div`
  height: 100px;
  background: green;
`

const Content = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  background: yellow;
  grid-column-gap: 70px;
`

const Filter = styled.section`
  background: blue;
  height: 300px;
`

const JobList = styled.section`
  background: brown;
  display: grid;

  grid-row-gap: 30px;
  grid-auto-rows: 220px;
  & > div {
    background: red;
  }
`
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
  
  
  handleMinValue = (event) => {
    this.setState({ minValue: event.target.value })
  }

  handleMaxValue = (event) => {
    this.setState({ maxValue: event.target.value })
  }

  handleSearchQuery = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  render() {
    return (
      <PageWrapper>
        <Header>
          <p>Pagina Profissional</p>
          <button onClick={() => this.props.changePage('home')}>
            Home
          </button>
          <button>
            Cadastro
          </button>
        </Header>
        <ContentWraper>

          <SubHeader>
            <h2>Cadastre serviços e encontre as pessoas certas para você</h2>
            <input type="text" onChange={this.handleSearchQuery} value={this.state.searchQuery}></input>
          </SubHeader>

          <Content>

            <Filter> 
              <input onChange={this.handleMinValue} value={this.state.minValue}></input>
              <input onChange={this.handleMaxValue} value={this.state.maxValue}></input>
            </Filter>

            <JobList>
              <ul>
              {this.state.jobs.map(job =>
              (
                <li>
                  {job.title}
                  {job.description}
                  {job.value}
                  {job.taken}
                  {job.paymentMethods}
                </li>
              )
              )}
              </ul>
  
            </JobList>

          </Content>

        </ContentWraper>
      </PageWrapper>
    )
  }
}