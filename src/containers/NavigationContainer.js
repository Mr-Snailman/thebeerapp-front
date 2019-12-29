import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import UnsplashCredit from '../components/UnsplashCredit'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  menuIcon: {
    marginRight: theme.spacing(2),
  },
}))

export default (props) => {
  const classes = useStyles(props)
  const [anchorEl, setAnchorEl] = React.useState(null)
  
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar>
          <IconButton className={classes.menuIcon} edge='start' color='inherit'>
            <MenuIcon onClick={handleClick}/>
          </IconButton>
          <Menu
            id='top-navigation-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Beer Recipes</MenuItem>
          </Menu>
          <Typography variant='h6' className={classes.title}>
            The Beer App
          </Typography>
          <IconButton edge='end' color='inherit'>
            <InfoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      { props.children }
      <footer>
        <UnsplashCredit/>
      </footer>
    </React.Fragment>
  )
}

