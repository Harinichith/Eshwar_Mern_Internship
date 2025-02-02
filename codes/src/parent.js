import React from 'react'
import Child1 from './child1';

const Parent = (props) => {
    const message="Hello From Parent"
  return (
    <div>
        <h1>This is Parent component</h1>
        <Child1 message={message} />

    </div>
  )
}

export default Parent;