import React, { useEffect, useState } from "react"
import { useInput } from "utils/use-input"
import { jobFilter } from 'utils/job-filter'
import { getAllJobs, takeJob, giveUpJob } from "utils/api"
import { HeaderProf, FilterProf, CardProf } from "components"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Grow from "@material-ui/core/Grow"

const defaultValues = {
  valueMin: '',
  valueMax: '',
  search: '',
  order: 'title',
  orderSeq: 'rec'
}
const Professional = props => {
  const [jobs, setJobs] = useState([])
  const { input, setInput, controlInput } = useInput(defaultValues)
  const [reload, setReload] = useState(true)




  useEffect(() => {
    if (reload) {
      getAllJobs().then(r => {
        setJobs([...r.jobs])
      })
      const search = props.search || ''
      setInput({ ...input, search })
      setReload(false)
    }
  }, [reload])

  const onTake = job => {
    if (job.taken) {
      giveUpJob(job.id).then(r => setReload(true))
    } else {
      takeJob(job.id).then(r => setReload(true))
    }
  }

  const { valueMin, valueMax, search, order, orderSeq } = input
  let job = new jobFilter(jobs)

  valueMin && job.filter(job => Number(job.value) >= valueMin)
  valueMax && job.filter(job => Number(job.value) <= valueMax)
  search && job.filter(job => {
    const regex = new RegExp(search, 'i')
    // job.title.includes(search)
    return regex.test(job.title)
  })
  order && job.order((a, b) => {
    if (order === 'title') {
      const itemA = a[order][0].charCodeAt(0)
      const itemB = b[order][0].charCodeAt(0)
      return orderSeq === 'asc' ? itemA - itemB : itemB - itemA
    }
    else if (order === 'value') {
      const itemA = Number(a[order]) || 0
      const itemB = Number(b[order]) || 0
      return orderSeq === 'asc' ? itemA - itemB : itemB - itemA
    } else {
      const itemA = Number(a[order][0].substr(0,1))
      const itemB = Number(b[order][0].substr(0,1))
      return orderSeq === 'asc' ? itemA - itemB : itemB - itemA

    }
  })
  if (orderSeq === 'rec') job.order((jobA, jobB) => jobA.value - jobB.value)
  
  console.log(props)
  return (
    <Container>
      <Grid container spacing={8}>
        <HeaderProf changePage={props.changePage} />
        <FilterProf {...{input, controlInput}} />

        <Grid
          item
          container
          spacing={6}
          justify='space-between'
          alignItems='flex-start'
        >
          {job.filtered.map((job, index) => (
            <Grow
              in={true}
              timeout={{ enter: (index + 1) * 500, exit: 1000 }}
              key={job.id}
            >
              <Grid container item xs={12} sm={12} md={6} lg={4}
                justify='center'
              >
                <CardProf
                  key={job.id}
                  {...job}
                  onTake={() => onTake(job)}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Professional
