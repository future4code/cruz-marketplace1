import { Grid } from '@material-ui/core'
import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <Grid container>
        <p>Pagina Home</p>
        <button onClick={() => this.props.changePage('professional')}>
          Ir para Profissional
        </button>
      </Grid>
    )
  }
}