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
  grid-template-columns: 500px 1fr;
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
  grid-auto-rows: 300px;
  & > div {
    background: red;
  }
`
export class Professional extends Component {
  render() {
    return (
      <PageWrapper>
        <Header>
          <p>Pagina Professional</p>
          <button onClick={() => this.props.changePage('home')}>
            Home
          </button>
          <button>
            Cadastro
          </button>
        </Header>

        <ContentWraper>

          <SubHeader>

          </SubHeader>

          <Content>

            <Filter>
            </Filter>

            <JobList>
              <div></div>
              <div></div>
              <div></div>
            </JobList>

          </Content>

        </ContentWraper>
      </PageWrapper>
    )
  }
}