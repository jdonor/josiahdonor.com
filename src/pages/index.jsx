import React from 'react';
import headshot from '../img/headshot.jpg';

const IndexPage = () => (
  <div>
    <div style={{ float: 'left' }}>
      <img src={headshot} width="200px" alt="Man's face" />
    </div>
    <div style={{ padding: '8px', marginLeft: '200px' }}>
      <h3>Husband - Dad - Software Engineer - Musician - Gamer</h3>
      <p>
        Hey there! Get in touch with me here:&nbsp;
        <a href="mailto:josiahdonor@gmail.com">josiahdonor@gmail.com</a>
      </p>
    </div>
  </div>
);

export default IndexPage;
