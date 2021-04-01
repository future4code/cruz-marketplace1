import React from "react"
import logo from "images/LogoComNome.svg"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  header: {
    height: "100px",
    margin: "2% auto",
  },
  logo: {
    width: "170px",
  },
}))

export const HeaderProf = () => {
  const classes = useStyles()

  return (
    <Grid
      className={classes.header}
      container
      item
      justify='space-between'
      alignItems='center'
      spacing={0}
    >
      <Grid item xs={2}>
        <img
          className={classes.logo}
          src={logo}
          alt='Future Ninjas Logo'
          onClick={() => this.props.changePage("home")}
        />
      </Grid>

      <Grid item xs={10}>
        <Typography variant='h2' color='secondary' align='center'>
          Professional
        </Typography>
      </Grid>
    </Grid>
  )
}
