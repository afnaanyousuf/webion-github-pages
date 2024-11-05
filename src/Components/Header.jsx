import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
      <header id='header'>
        <div className="container">
            <div className="header-wrapper">
              <div className="row">
                <div className="col-md-9">
                    <h1><Link to="./">LearnHub</Link></h1>
                </div>
                <div className="col-md-3">
                  <nav>
                    <ul>
                      <Link to="/formdata" element={<FormData/>}>Admin</Link>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
        </div>
      </header>
  )
}

export default Header