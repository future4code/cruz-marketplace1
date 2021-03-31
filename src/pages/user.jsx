import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Search } from '@material-ui/icons'
import { Button } from '@material-ui/core'

export class User extends Component {
  render() {
    return (
      <Grid container>

        <Grid item md={6}>
          <Typography variant="h3" component='h2' color="initial">
            Pegue os serviços que você pode fazer e ganhe vários dinheiros
          </Typography>
        </Grid>

        <Grid item md={6} alignItems='center'>
          <TextField
            fullWidth
            id="search"
            label="Pesquisa..."
            type='search'
            value={''}
            onChange={''}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Search />
                </InputAdornment>
              )
            }}
          />
        </Grid>

        <Grid item md={6}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>

        </Grid>

        <Grid item md={6}>

        </Grid>


      </Grid>
    )
  }
}