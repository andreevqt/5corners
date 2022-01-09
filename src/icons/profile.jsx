import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({
  className,
  width,
  height
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 27"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M23 26v-2.778c0-1.473-.58-2.886-1.61-3.928a5.472 5.472 0 00-3.89-1.627h-11a5.472 5.472 0 00-3.89 1.627A5.584 5.584 0 001 23.222V26M12 12.111c3.038 0 5.5-2.487 5.5-5.555C17.5 3.487 15.038 1 12 1S6.5 3.487 6.5 6.556c0 3.068 2.462 5.555 5.5 5.555z"
      />
    </svg>
  );
};

Profile.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

Profile.defaultProps = {
  className: '',
  width: '24',
  height: '27'
};

export default Profile;
