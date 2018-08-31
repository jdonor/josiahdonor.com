import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        {/* &nbsp;
        <Link
          to="/work-history"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Work history
        </Link>
        &nbsp;
        <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>
          Projects
        </Link> */}
      </h1>
    </div>
  </div>
);

export default Header;
