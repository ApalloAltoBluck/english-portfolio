import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Row, Nav, Col } from "react-bootstrap";


const Header = ({ siteTitle }) => (
  
  <header
    style={{
      background: `#fafafa`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <div className="text-center">
      <h1 >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        Oliver Henry Buckley <hr/>
        
      </h1>
      <div classname="mx-auto">
        <strike><a href="/" >Resume </a></strike>
        <strike><a href="/" className=" header">Programming </a> </strike>
        <a href="/" className=" header">Words </a> 
        <strike><a href="/" className=" header">Portfolio </a></strike>
        </div>
    </div>  
         
    </div>
    

    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header