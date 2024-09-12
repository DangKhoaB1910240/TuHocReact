import React from 'react'

const Header = ({title= "abccc"}) => {
  return (
    <div style={{background: 'mediumblue',color: '#fff'}}>{title}</div>
  )
}

export default Header