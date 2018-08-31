import React from 'react';
import Link from 'gatsby-link';

const Navigation = () => (
  <div style={{ backgroundColor: 'rebeccapurple' }}>
    <div id="nav">
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
          <Link
            to="/projects"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
