import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  unsplashLogo: {
    backgroundColor: 'black',
    color: 'white',
    textDecoration: 'none',
    padding: '4px 6px',
    fontFamily: '-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: 1.2,
    display: 'inline-block',
    borderRadius: '3px',
  },
  unsplashSvg: {
    height: '12px',
    width: 'auto',
    position: 'relative',
    verticalAlign: 'middle',
    top: '-2px',
    fill: 'white',
  },
  unsplashArtist: {
    display: 'inline-block',
    padding: '2px 3px',
  },
})

export default (props) => {
  const classes = useStyles(props)
  return (
    <a
      className={classes.unsplashLogo}
      href="https://unsplash.com/@markusspiske?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
      target="_blank"
      rel="noopener noreferrer"
      title="Download free do whatever you want high-resolution photos from Markus Spiske">
      <span className={classes.unsplashArtist}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.unsplashSvg}
          viewBox='0 0 32 32'>
          <title>unsplash-logo</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z">
          </path>
        </svg>
      </span>
      <span className={classes.unsplashArtist}>Markus Spiske</span>
    </a>
  )
}

