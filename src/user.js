import React from 'react'
import { useContext } from 'react'
import { themeContext } from './App'

const User = ({Theme}) => {
    const contextValue = useContext(themeContext)
    console.log(contextValue.Theme)

  return (
    <div>
      <h1>User</h1>
    </div>
  )
}

export default User