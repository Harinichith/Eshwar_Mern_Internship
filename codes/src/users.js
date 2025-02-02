import React from 'react'
import User from './user'

const Users = (props) => {
  return (
    <div>
      <h1>Users</h1>
      <User {...props} />
    </div>
  )
}

export default Users