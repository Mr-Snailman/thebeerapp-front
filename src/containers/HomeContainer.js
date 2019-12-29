import React from 'react'
import UnsplashCredit from '../components/UnsplashCredit'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
})

export default (props) => {
  const classes = useStyles(props)
  return (
    <div>
      HOME
      <footer>
        <UnsplashCredit/>
      </footer>
    </div>
  )
}

