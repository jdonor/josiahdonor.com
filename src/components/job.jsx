import React from 'react';
import PropTypes from 'prop-types';

const Job = ({
  company,
  location,
  title,
  beginDate,
  endDate,
  description,
  technologies,
}) => (
  <div
    style={{
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 0.5rem 2rem 0 rgba(0,0,0,.2)',
    }}
  >
    <h3>
      <strong>{company}</strong>
      <span style={{ float: 'right' }}>{location}</span>
    </h3>
    <h4>
      <span>{title}</span>
    </h4>
    <p>
      <span>{beginDate}</span>
      &nbsp;-&nbsp;
      <span>{endDate}</span>
    </p>
    <p>{description}</p>
    <p>{technologies.join(' - ')}</p>
  </div>
);

Job.propTypes = {
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  beginDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Job.defaultProps = {
  endDate: 'Present',
};

export default Job;
