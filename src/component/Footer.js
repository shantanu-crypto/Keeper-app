import React from 'react'

const Footer = () => {
    const number= new Date();
    const currentYear= number.getFullYear();

  return (
    <footer>
        Copyright © {currentYear}
    </footer>
  )
}

export default Footer