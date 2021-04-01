import React, { Component } from "react"
import { getAllJobs } from "utils/api"

const defaultValues = {
  order: "title",
  valueMin: "",
  valueMax: "",
  search: "",
}

const WithFilters = WrapedComponent => {
  return class JobList extends Component {
    constructor(props) {
      super(props)
      this.filterJob = this.filterJob.bind(this)
    }
    state = {
      jobs: [],
      filteredJobs: [],
      filters: [],
    }

    componentDidMount() {
      getAllJobs().then(r => {
        this.setState({
          jobs: [...r.jobs],
          filteredJobs: [...r.jobs],
          isLoading: false
        })
      })
    }

    controlInput = e => {
      let { name, value } = e.target
      console.log("Aqui", name, value)
      value = name.includes("value") ? Number(value) : String(value)
      console.log('tipo: ', typeof value)

      this.setState(
        {
          filters: { ...this.state.filters, [name]: value }
        }, () => this.filterJob(this.state.filters))
    }

    filterJob = filter => {
      const { valueMin, valueMax, search, order } = filter
      console.log({ valueMin, valueMax, search })
      console.log('Filter: ', filter)
      if (!filter.valueMax) { filter.valueMax = Infinity }
      if (!filter.valueMin) { filter.valueMin = 0 }

      const filterOption = job => {
        console.log({job})
        return job.value > filter.valueMin &&
        job.value < filter.valueMax &&
        job.title.includes(filter.search)
      }

      const orderByOption = (itemA, itemB) => {
        console.log('ORDER: ', itemA[filter.order], itemB[filter.order])
        return itemA[filter.order] < itemB[filter.order]
      }

      let filteredJobs
      if (!valueMin && !valueMax && !search) {
        this.setState({ filteredJob: this.state.jobs })
        filteredJobs = this.state.jobs
      } else {
        filteredJobs = this.state.jobs.filter(filterOption)
      }
      console.log('valuemin: ', filter.valueMin)
      console.log('VAMOS ORDENAR')
      const orderedJobs = filteredJobs.sort(orderByOption)

      this.setState({ filteredJobs: orderedJobs })
    }

    render() {
      return (
        <WrapedComponent
          filterJob={this.filterJob}
          controlInput={this.controlInput}
          jobs={this.state.filteredJobs}
          filters={this.state.filters}
          {...this.props}
        />
      )
    }
  }
}

export default WithFilters
