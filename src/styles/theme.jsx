import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#A185DB'
    },
    secondary: {
      main: '#E02867'
    },
    background: {
      default: '#F4F4F4',
      paper: 'rgba( 196, 196, 196, 0.2)'
    }
  }
})

export default theme