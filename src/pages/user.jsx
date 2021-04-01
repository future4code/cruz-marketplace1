import React, { Component } from "react";
import styled from "styled-components";
import { getAllJobs, deleteJob } from "../utils/api";
import { Button } from "@material-ui/core";
import logo from "../images/LogoComNome.svg";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import CardUser from "../components/CardUser";
import Grow from "@material-ui/core/Grow";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  padding-left: 100px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > :nth-child(3) {
    font-size: 1.5rem;
  }
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  color: #e0286799;
`;

const SubHeader = styled.div`
  display: flex;

  & > h2 {
    font-size: 2.25rem;
    flex: 3;

    & > span {
      color: #e02867;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 50px;
`;

const Filter = styled.div`
  padding: 20px 30px;
  border-radius: 12px;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  height: 500px;
  border: 1px solid black;

  & > * {
    padding-top: 40px;
  }
`;

const OrderFilter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;

  & > * {
    flex: 1;
  }
`;

const ValueBtns = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  font-weight: bold;

  & > p {
    padding: 5px 0;
    margin: 0;
  }

  & > div {
    display: flex;
  }

  & > div :not(:last-child) {
    margin-right: 10px;
  }
`;

const MinMax = styled.div`
  display: flex;

  & > * {
    margin: 0 10px;
  }
`;

const JobList = styled.div`
  grid-column: 3/7;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-auto-rows: 300px;
  grid-gap: 10px;
  justify-content: center;
  padding-bottom: 20px;
`;

const SearchBar = styled.input`
  align-self: center;
  background-color: #c4c4c430;
  padding: 0 10px;
  border-radius: 30px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 2px gray;
  height: 65px;
  flex: 2;
  font-size: 1.5rem;
`;

export class User extends Component {
  state = {
    jobList: [],
    searchQuery: "",
    orderType: "",
    minValue: 1,
    maxValue: 100,
    isLoading: false,
  };

  handleSearchQuery = (event) => {
    let query = event.target.value;
    query = query.toLowerCase();
    this.setState({ searchQuery: query });
  };

  componentDidMount() {
    getAllJobs().then((result) => {
      this.setState({ jobList: result.jobs });
    });
  }

  handleOrderType = (event) => {
    this.setState({ orderType: event.target.value });
  };

  handleMinValue = (event) => {
    this.setState({ minValue: event.target.value });
  };

  handleMaxValue = (event) => {
    this.setState({ maxValue: event.target.value });
  };

  loadingCheck = () => {
    return this.state.isLoading ? <div>isLoading</div> : false;
  };

  changeMaxValue = (value) => {
    this.setState({ maxValue: value });
  };

  deleteMyJob = (id) => {
    deleteJob(id)
      .then((result) => {
        alert("Job excluido com sucesso!");
        getAllJobs().then((result) => {
          this.setState({ jobList: result.jobs });
        });
      })
      .catch(() => {});
  };

  render() {
    const filteredJobs = this.state.jobList.filter((job) => {
      return (
        job.value >= this.state.minValue &&
        job.value <= this.state.maxValue &&
        job.title.includes(this.state.searchQuery)
      );
    });

    let orderedJobs;
    switch (this.state.orderType) {
      case "titulo":
        orderedJobs = filteredJobs.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        orderedJobs = [...filteredJobs];
        break;
    }

    return (
      <PageContainer>
        <Header>
          <img src={logo} alt="logo" />
          <SectionTitle>Contratante</SectionTitle>
          <Button variant="contained" color="secondary" size="large" href="/">
            Cadastrar
          </Button>
        </Header>

        <MainContent>
          <SubHeader>
            <h2>
              Cadastre serviços e encontre as <span>pessoas certas</span> para
              você
            </h2>
            <SearchBar
              type="search"
              placeholder="Digite o titulo que está procurando"
              onChange={this.handleSearchQuery}
            />
          </SubHeader>

          <Content>
            <Filter>
              <OrderFilter>
                <FormControl color="primary">
                  <InputLabel id="order-select">Ordenar</InputLabel>
                  <Select
                    labelId="order-select"
                    id="order-select"
                    value={this.state.orderType}
                    onChange={this.handleOrderType}
                  >
                    <MenuItem value="titulo">Titulo</MenuItem>
                  </Select>
                </FormControl>
              </OrderFilter>

              <ValueBtns>
                <p>Valores</p>
                <ButtonGroup variant="contained" color="primary" size="small">
                  <Button onClick={() => this.changeMaxValue(100)}>
                    Até 100
                  </Button>
                  <Button onClick={() => this.changeMaxValue(500)}>
                    Até 500
                  </Button>
                  <Button onClick={() => this.changeMaxValue(1000)}>
                    Até 1000
                  </Button>
                </ButtonGroup>
              </ValueBtns>

              <MinMax>
                <FormControl fullWidth color="primary">
                  <InputLabel htmlFor="valor-min">Minimo</InputLabel>
                  <Input
                    id="valor-min"
                    type="number"
                    value={this.state.minValue}
                    onChange={this.handleMinValue}
                    startAdornment={
                      <InputAdornment position="start">R$</InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl fullWidth color="primary">
                  <InputLabel htmlFor="valor-max">Maximo</InputLabel>
                  <Input
                    id="valor-max"
                    type="number"
                    value={this.state.maxValue}
                    onChange={this.handleMaxValue}
                    startAdornment={
                      <InputAdornment position="start">R$</InputAdornment>
                    }
                  />
                </FormControl>
              </MinMax>
            </Filter>
            <JobList>
              {this.loadingCheck() ||
                orderedJobs.map((job, index) => {
                  return (
                    <Grow
                      in={true}
                      timeout={{
                        enter: 500 + index * 500,
                        exit: 1000,
                      }}
                      key={job.id}
                    >
                      <div>
                        <CardUser
                          onDelete={() => this.deleteMyJob(job.id)}
                          paymentMethods={job.paymentMethods}
                          title={job.title}
                          description={job.description}
                          data={job.dueDate}
                        />
                      </div>
                    </Grow>
                  );
                })}
            </JobList>
          </Content>
        </MainContent>
      </PageContainer>
    );
  }
}
