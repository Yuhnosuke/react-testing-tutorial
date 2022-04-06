import React from 'react'

const Hello = (props) => {
  if (props.name) {
    return <h1>Hello, {props.name}</h1>
  }
  return <span>Hey, stranger</span>
}

export default Hello
