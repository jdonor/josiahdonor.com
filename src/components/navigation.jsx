import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <div id="nav" style={{ backgroundColor: 'rebeccapurple' }}>
    <ul>
      <li>
        <Link
          to="/work-history"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Work History
        </Link>
      </li>

      <li>
        <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>
          Projects
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
