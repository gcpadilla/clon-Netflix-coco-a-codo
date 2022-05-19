import React from 'react'

const Divider = ({height}) => {
  return (
    <div className='bg-transparent' style={{width: "100%", height: `${height}`}}></div>
  )
}

export default Divider