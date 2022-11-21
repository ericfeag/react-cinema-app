import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './error-page.scssº'

const errorpage = props => {
  return (
    <div className='error-page'>
        <h1 className='error-header'>ooops!</h1>
        <p className='error-msg'>Something went wrong.</p>
        <Link  className='error-link' to={'/'}>
            <i className='icon-home'></i> Go back to home-page.
        </Link>
    </div>
  )
}

export default error-page