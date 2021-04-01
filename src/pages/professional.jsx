import React, { Component } from "react"
import WithFilters from "hoc/with-filter"
import { getAllJobs, takeJob, giveUpJob } from "utils/api"
import { HeaderProf, FilterProf, CardProf } from "components"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Grow from "@material-ui/core/Grow"

class Professional extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      input: { nome: "" },
    }
    this.filterJob = this.props.filterJob
    this.controlInput = this.props.controlInput
  }

  onTake = job => {
    const newJobs = [...this.state.jobs]

    if (job.taken) {
      giveUpJob(job.id).then(r => {
        newJobs.forEach(
          item => (item.taken = item.id === job.id ? false : item.taken)
        )
        this.setState({ jobs: newJobs })
      })
    } else {
      takeJob(job.id).then(r => {
        newJobs.forEach(
          item => (item.taken = item.id === job.id ? true : item.taken)
        )
        this.setState({ jobs: newJobs })
      })
    }
  }

  render() {
    return (
      <Container>
        <Grid container spacing={8}>
          <HeaderProf />
          <FilterProf filter={this.props.filters} control={this.controlInput} />

          <Grid
            item
            container
            spacing={6}
            justify='space-between'
            alignItems='flex-start'
          >
            {this.props.jobs.map((job, index) => (
              <Grow
                in={true}
                timeout={{ enter: (index + 1) * 500, exit: 1000 }}
                key={job.id}
              >
                <Grid container item xs={4}>
                  <CardProf
                    key={job.id}
                    {...job}
                    onTake={() => this.onTake(job)}
                  />
                </Grid>
              </Grow>
            ))}
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default WithFilters(Professional)
