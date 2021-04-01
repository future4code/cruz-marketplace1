import React, { Component } from "react";
import { getAllJobs, takeJob, giveUpJob } from "utils/api";
import CardProf from "components/CardProf";
import logo from "images/LogoComNome.svg";
import Footer from "components/layout/footer";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FilterSharp, Search } from "@material-ui/icons";
import { Button, FormGroup, Grow, Paper } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";

const styles = (theme) => ({
  header: {
    marginTop: "2%",
  },
  logo: {
    width: "170px",
    // height: '100px',
  },
  title: {},
  button: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  filter: {
    // width: '80%',
    // flexBasis: '100%',
    margin: "auto",
    padding: 0,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    flexGrow: 1,
    height: "30vh",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: "2rem",
    "& *": { color: "white", fontSize: "3rem" },
  },
  inputValor: {
    textAlign: "center",
  },
  search: {
    fontSize: "3rem",
  },
  fullWidth: {
    flexBasis: "100%",
    textAlign: "center",
  },
  filterValues: {},
});

class Professional extends Component {
  state = {
    jobs: [],
    filters: [],
    isLoading: true,
    input: { nome: "" },
  };

  componentDidMount() {
    getAllJobs().then((r) => {
      this.setState({ jobs: [...r.jobs], isLoading: false });
    });
  }

  controlInput = (e) => {
    let { name, value } = e.target;
    value = name.includes("value") ? Number(value) : String(value);
    this.setState({ filters: { ...this.state.filters, [name]: value } });
  };

  onTake = (job) => {
    const newJobs = [...this.state.jobs];

    if (job.taken) {
      giveUpJob(job.id).then((r) => {
        newJobs.forEach(
          (item) => (item.taken = item.id === job.id ? false : item.taken)
        );
        this.setState({ jobs: newJobs });
      });
    } else {
      takeJob(job.id).then((r) => {
        newJobs.forEach(
          (item) => (item.taken = item.id === job.id ? true : item.taken)
        );
        this.setState({ jobs: newJobs });
      });
    }
  };

  render() {
    const { classes } = this.props;
    const show = Boolean(this.state.jobs.length);

    return (
      <Grid container spacing={8}>
        <Grid
          className={classes.header}
          container
          item
          justify="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={2}>
            <img className={classes.logo} src={logo} alt="Future Ninjas Logo" />
          </Grid>

          <Grid item xs={10}>
            <Typography variant="h2" color="secondary" align="center">
              Professional
            </Typography>
          </Grid>

          {/* <Grid container item xs={4} justify='flex-end' alignItems='center'>
            <Button variant="contained" color="secondary"
              className={classes.button}
              onClick={() => this.props.changePage('home')}>
              Home
            </Button>
          </Grid> */}
        </Grid>

        <Grid
          item
          container
          spacing={1}
          xs={12}
          className={classes.filter}
          justify="space-evenly"
        >
          {/* <FormControl component="fieldset" error={'ma oi'} className={classes.formControl}> */}
          <Grid
            container
            item
            xs={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <FormLabel component="legend" color="primary">
              <Typography color="primary">Ordenar por:</Typography>
            </FormLabel>
            <RadioGroup
              name="order"
              value={this.state.filters.order}
              onChange={this.controlInput}
            >
              <FormControlLabel
                value="title"
                control={<Radio />}
                label="Título"
              />
              <FormControlLabel
                value="value"
                control={<Radio />}
                label="Valor"
              />
              <FormControlLabel
                value="time"
                control={<Radio />}
                label="Prazo"
              />
            </RadioGroup>
            {/* <FormHelperText>{helperText}</FormHelperText> */}
            <Button variant="outlined" color="primary">
              Ordenar
            </Button>
          </Grid>

          <Grid
            container
            item
            xs={6}
            justify="space-between"
            alignItems="center"
            direction="row"
          >
            <FormLabel
              component="legend"
              color="primary"
              className={classes.fullWidth}
            >
              <Typography color="primary">Filtrar Valores</Typography>
            </FormLabel>
            <TextField
              type="number"
              name="valueMin"
              label="Valor Mínimo"
              value={this.state.filters.valueMin}
              onChange={this.controlInput}
              className={classes.inputValor}
            />
            <TextField
              type="number"
              name="valueMax"
              label="Valor Máximo"
              value={this.state.filters.valueMax}
              onChange={this.controlInput}
              className={classes.inputValor}
            />
            <Button variant="outlined" color="primary">
              Filtrar
            </Button>

            <TextField
              fullWidth
              type="search"
              label="Pesquisar..."
              InputProps={{
                endAdornment: <Search />,
              }}
              className={classes.search}
            />
          </Grid>

          {/* <Grid container item xs={6} justify='center'>
          </Grid> */}
          {/* </FormControl> */}

          {/* <Paper className={classes.paper}>
          </Paper> */}
        </Grid>

        <Grid
          item
          container
          // xs={12}
          spacing={6}
          justify="space-between"
          alignItems="flex-start"
        >
          {this.state.jobs.map((job, index) => (
            <Grow
              in={show}
              mountOnEnter={true}
              timeout={{
                enter: 500 + index * 500,
                exit: 1000,
              }}
              key={job.id}
            >
              <Grid container item xs={4}>
                <CardProf
                  taked={job.taken}
                  data={job.dueDate}
                  key={job.id}
                  {...job}
                  onTake={() => this.onTake(job)}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

// export withStyles(styles)(Professional)
export default withStyles(styles)(Professional);
