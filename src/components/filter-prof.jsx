import React from "react"
import FormLabel from "@material-ui/core/FormLabel"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import RadioGroup from "@material-ui/core/RadioGroup"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Search from "@material-ui/icons/Search"

const useStyles = makeStyles(theme => ({
  filter: {
    // width: '80%',
    // flexBasis: '100%',
    margin: "auto",
    padding: 0,
    backgroundColor: theme.palette.background.paper,
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
}))

export const FilterProf = props => {
  const classes = useStyles()
  const { order, valueMin, valueMax, search, orderSeq } = props.input
  const control = props.controlInput

  return (
    <Grid
      item
      container
      spacing={1}
      xs={12}
      className={classes.filter}
      justify='space-evenly'
    >
      <Grid
        container
        item
        xs={2}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <FormLabel component='legend' color='primary'>
          <Typography color='primary'>Ordenar por:</Typography>
        </FormLabel>
        <RadioGroup name='order' value={order} onChange={control}>
          <FormControlLabel selected value='title' control={<Radio />} label='Título' />
          <FormControlLabel value='value' control={<Radio />} label='Valor' />
          <FormControlLabel value='dueDate' control={<Radio />} label='Prazo' />
        </RadioGroup>
        <Button variant='outlined' color='primary'>
          Ordenar
        </Button>
      </Grid>



      <Grid
        container
        item
        xs={8}
        justify='space-between'
        alignItems='center'
        direction='row'
      >
        <FormLabel
          component='legend'
          color='primary'
          className={classes.fullWidth}
        >
          <Typography color='primary'>Filtrar Valores</Typography>
        </FormLabel>
        <TextField
          type='number'
          name='valueMin'
          label='Valor Mínimo'
          value={valueMin}
          onChange={control}
          className={classes.inputValor}
        />
        <TextField
          type='number'
          name='valueMax'
          label='Valor Máximo'
          value={valueMax}
          onChange={control}
          className={classes.inputValor}
        />
        <Button variant='outlined' color='primary'>
          Filtrar
        </Button>
        <TextField
          fullWidth
          type='search'
          name='search'
          label='Pesquisar...'
          InputProps={{
            endAdornment: <Search />,
          }}
          className={classes.search}
          value={search}
          onChange={control}
        />
      </Grid>



      <Grid
        container
        item
        xs={2}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <FormLabel component='legend' color='primary'>
          <Typography color='primary'>Ordem:</Typography>
        </FormLabel>
        <RadioGroup name='orderSeq' value={orderSeq} onChange={control}>
          <FormControlLabel selected value='rec' control={<Radio />} label='Recomendados' />
          <FormControlLabel value='asc' control={<Radio />} label='Crescente' />
          <FormControlLabel value='desc' control={<Radio />} label='Decrescente' />
        </RadioGroup>
        <Button variant='outlined' color='primary'>
          Ordenar
        </Button>
      </Grid>

    </Grid>
  )
}
