import CssBaseline from '@material-ui/core/CssBaseline'
import indigo from '@material-ui/core/colors/indigo'
import React from 'react'
import { createMuiTheme, MuiThemeProvider, withStyles, withTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    action: {
      selected: '#eee',
    },
    type: 'light',
    primary: {
      main: '#e7e7e7',
    },
    secondary: {
      main: indigo[400],
    },
  },
  overrides: {
  },
})

const styles = (classes) => ({
  root: {
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    background: 'no-repeat center/100% url(/markus-spiske-0376tfLb89c-unsplash.jpg)',
    display: 'flex',
  },
  content: {
    zIndex: 3,
    flexGrow: 1,
  },
})

class ThemeContainer extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <div id='main' className={classes.content}>
            { this.props.children }
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withTheme(withStyles(styles)(ThemeContainer))
