import React, { Component } from "react";
import { getAllJobs, deleteJob } from "../../utils/api";
import { Button } from "@material-ui/core";
import logo from "images/LogoComNome.svg";
import {PageContainer, MainContent, Header, SectionTitle, SubHeader, Content, Filter, OrderFilter, ValueBtns, MinMax, JobList, SearchBar} from "pages/User/styles"
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import CardUser from "../../components/CardUser";
import Grow from "@material-ui/core/Grow";
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"



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
    this.setState({ minValue: Number(event.target.value) });
  };

  handleMaxValue = (event) => {
    this.setState({ maxValue: Number(event.target.value) });
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
        Number(job.value) >= this.state.minValue &&
        Number(job.value) <= this.state.maxValue &&
        job.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );
    });

    console.log(filteredJobs)


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
          <img src={logo} alt="logo" onClick={() => this.props.changePage('home')} />
          <SectionTitle>Contratante</SectionTitle>
          <Button variant="contained" color="secondary" size="large" onClick={() => this.props.changePage('create-job')}>
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
              value={this.state.searchQuery}
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
                  <Button onClick={() => this.changeMaxValue(100.0)}>
                    Até 100
                  </Button>
                  <Button onClick={() => this.changeMaxValue(500.0)}>
                    Até 500
                  </Button>
                  <Button onClick={() => this.changeMaxValue(1000.0)}>
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
                          value={job.value}
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
