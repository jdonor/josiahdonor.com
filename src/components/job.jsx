import React from 'react';
import PropTypes from 'prop-types';

const floatRight = { float: 'right' };

function Job({
  company,
  location,
  title,
  beginDate,
  endDate,
  description,
  technologies,
}) {
  const descriptionParagraphs = description.map((text, index) => (
    <p key={index}>{text}</p>
  ));

  return (
    <div
      style={{
        marginBottom: '32px',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 0.5rem 2rem 0 rgba(0,0,0,.2)',
      }}
    >
      <span style={floatRight}>{location}</span>
      <h3>{company}</h3>
      <p style={floatRight}>
        <span>{beginDate}</span>
        &nbsp;-&nbsp;
        <span>{endDate}</span>
      </p>
      <h4>
        <span>{title}</span>
      </h4>
      {descriptionParagraphs}
      <p>{technologies.join(' - ')}</p>
    </div>
  );
}

Job.propTypes = {
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  beginDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Job.defaultProps = {
  endDate: 'Present',
};

export default Job;
