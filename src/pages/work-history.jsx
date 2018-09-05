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
      description={[
        'Create tools to serve the business intelligence needs of travel agencies.',
      ]}
      technologies={['C#', 'JavaScript', 'HTML', 'CSS', 'SQL']}
    />

    <Job
      company="Lighter Capital"
      location="Seattle WA"
      title="Full Stack Software Engineer"
      beginDate="May 2018"
      endDate="June 2018"
      description={[
        'Lead engineer for servicing management platform, creating tools to enable servicing analysts to be more efficient and effective.',
      ]}
      technologies={[
        'C#',
        'JavaScript',
        'HTML',
        'CSS',
        'React',
        'SQL',
        'MongoDB',
      ]}
    />

    <Job
      company="Epic Systems"
      location="Madison WI"
      title="Software Developer"
      beginDate="January 2014"
      endDate="December 2017"
      description={[
        'Lead Developer of Procedure Pass module: a patient readiness tracking tool designed to increase Operating Room efficiency by reducing day-of-surgery delays and cancellations. Resulted in improved efficiency metrics for several large health systems.',
        'Usability Lead for a team of 40 engineers. Responsible for guiding and determining best practices for user experience design and usability testing. Educated team and implemented development process changes to improve the usability of our product.',
      ]}
      technologies={[
        'C#',
        'JavaScript',
        'HTML',
        'CSS',
        'Mumps',
        'Visual Basic',
      ]}
    />

    <Job
      company="Logos Bible Software"
      location="Bellingham WA"
      title="Software Developer"
      beginDate="May 2012"
      endDate="January 2013"
      description={[
        'Created new method for displaying data which significantly improved performace',
      ]}
      technologies={['C#', 'Objective-C']}
    />

    <Job
      company="Logos Bible Software"
      location="Bellingham WA"
      title="Software Developer Intern"
      beginDate="June 2011"
      endDate="August 2011"
      description={[
        'Rewrote note-taking engine to be more performant and functional.',
      ]}
      technologies={['Objective-C']}
    />
  </div>
);

export default WorkHistory;
