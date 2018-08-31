import React from 'react';

import Job from '../components/job';

const WorkHistory = () => (
  <div>
    <h1>Work History</h1>

    <Job
      company="Virtuoso"
      location="Seattle WA"
      title="Senior Software Development Engineer"
      beginDate="July 2018"
      description="Create tools to serve the business intelligence needs of travel agencies."
      technologies={['C#', 'JavaScript', 'HTML', 'CSS', 'SQL']}
    />
  </div>
);

export default WorkHistory;
