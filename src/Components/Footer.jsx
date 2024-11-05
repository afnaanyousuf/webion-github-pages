import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
     <footer className='footer-text'>
        <h3>LearnHub</h3>
        <p>© 2022 Tailwind Labs Inc. All rights reserved</p>
        <span>
        <Link to="/formdata">Form</Link> | <a href="#">Notes</a>
        </span>
     </footer>
  )
}

export default Footer
