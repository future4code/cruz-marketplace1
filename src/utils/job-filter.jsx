export class jobFilter {
  constructor(jobs) {
    this.jobs = jobs
    this.filtered = jobs
  }
  filter(callback) {
    this.filtered = this.filtered.filter(callback)
  }
  order(callback) {
    this.filtered = this.filtered.sort(callback)
  }
  sort() {
    this.filtered = this.filtered.sort()
  }
  reverse() {
    this.filtered = this.filtered.reverse()
  }
}
