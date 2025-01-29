import React from 'react'
import Users from './users'

const Container = (props) => {
  return (
    <div>
      <h1>Container</h1>
      <Users {...props} />
    </div>
  )
}

export default Container