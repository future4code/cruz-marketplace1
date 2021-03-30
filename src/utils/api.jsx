import axios from 'axios'
import interceptor from './interceptor'

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs'

const jobs = axios.create({baseURL})
interceptor(jobs)

const base = ({method = 'get', url = '', params = '', data = ''} = {}) => {
  return async () => {
    try {
      const r = await jobs({method, url, params, data})
      return r.data
    } catch(e) {
      console.error(e)
    }
  }
}

const getJob = id => base({url: id})()
const getAllJobs = base()
const createJob = data => base({method: 'post', data})()
const deleteJob = id => base({method: 'delete', url: id})()
const takeJob = id => base({method: 'put', url: `${id}/take`})()
const giveUpJob = id => base({method: 'put', url: `${id}/giveup`})()

export {getJob, getAllJobs, createJob, deleteJob, takeJob, giveUpJob}










//getJobs().then(r => console.log(r))