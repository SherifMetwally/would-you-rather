import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, onChange }) => {
  return (
    <div className='my-2'>
      <select className='form-control' onChange={onChange}>
        <option defaultValue>Select User</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
