import React, { Component } from 'react'
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
    jobList: [
      {
        value: 120,
        title: 'Job',
        description: "Esse é um job muito legal!",
        paymentMethods: [
          "card"
        ],
        dueDate: 1571972400
      },
      {
        value: 20,
        title: 'Job',
        description: "Esse é um job muito legal!",
        paymentMethods: [
          "card"
        ],
        dueDate: 1571972400
      }
    ],
    searchQuery: '',
    minValue: 100,
    maxValue: 200,
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
    const jobArray = this.state.jobList.filter((job) => {
      return (job.value >= this.state.minValue && job.value <= this.state.maxValue && job.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
    }).map((job) => {
      return <div>
        <p>{job.title}</p>
        <p>{job.description}</p>
        <p>{job.value}</p>
      </div>
    })
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
              {jobArray}
            </JobList>

          </Content>

        </ContentWraper>
      </PageWrapper>
    )
  }
}