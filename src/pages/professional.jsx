import React, { Component } from "react"
import { getAllJobs, takeJob, giveUpJob } from "utils/api"
import CardProf from "components/CardProf"
import logo from 'components/img/logo.png'

import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import { Search } from "@material-ui/icons"
import { Button } from '@material-ui/core'

const styles = theme => ({
  header: {
    height: '100px',
    border: '1px solid #000',
  },
  logo: {
    width: '100px',
    height: '100px',
  },
  search: {},
})

class Professional extends Component {
  state = {
    jobs: [],
    isLoading: true,
  }

  componentDidMount() {
    getAllJobs().then(r => {
      this.setState({ jobs: [...r.jobs], isLoading: false })
    })
  }

  onTake = job => {
    const newJobs = [...this.state.jobs]

    if (job.taken) {
      giveUpJob(job.id).then(r => {
        newJobs.forEach(
          item => (item.taken = item.id === job.id ? false : item.taken)
        )
      })
    } else {
      takeJob(job.id).then(r => {
        newJobs.forEach(
          item => (item.taken = item.id === job.id ? true : item.taken)
        )
      })
    }
    this.setState({ jobs: newJobs })
  }

  // handleMinValue = event => {
  //   this.setState({ minValue: event.target.value })
  // }

  // handleMaxValue = event => {
  //   this.setState({ maxValue: event.target.value })
  // }

  // handleSearchQuery = event => {
  //   this.setState({ searchQuery: event.target.value })
  // }

  render() {
    const { classes } = this.props

    return (
      <Grid container spacing={8}>
        
        <Grid
          container
          item
          justify='space-between'
          alignItems='center'
          spacing={0}
        >
          <Grid item xs={4}>
            <img className={classes.logo} src={logo} alt="Future Ninjas Logo"/>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h2" color="primary">Professional</Typography>
          </Grid>

          <Grid container item xs={4} justify='flex-end' alignItems='center'>
            <Button variant="contained" color="secondary" href="/">
              Home
            </Button>
          </Grid>
        </Grid>
          
        <Grid
          item
          container
          xs={12}
          spacing={6}
          justify='space-evenly'
          alignItems='flex-start'
        >
          {this.state.jobs.map(job => (
            <Grid container item xs={3} key={job.id}>
              <CardProf {...job} onTake={() => this.onTake(job)} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  }
}

// export withStyles(styles)(Professional)
export default withStyles(styles)(Professional)
