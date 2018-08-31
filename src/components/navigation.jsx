import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <ul>
    <li>
      <Link
        to="/work-history"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Work history
      </Link>
    </li>

    <li>
      <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>
        Projects
      </Link>
    </li>
  </ul>
);

export default Navigation;
