import React from 'react'

import './Spinner.scss';

export const spinner = () => {
  return (
    <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
        <div className='bounce3'></div>
    </div>
  )
}
