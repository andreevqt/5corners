import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import selectStyles from './select.module.css';
import Chevron from '../../../icons/chevron';

export const Option = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});

const Select = ({
  className,
  defaultValue,
  onChange,
  options,
  placeholder
}) => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (defaultValue) {
      setSelected(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    const hideIfClickedOutside = () => setIsOpen(false);

    document.addEventListener('click', hideIfClickedOutside);
    return () => document.removeEventListener('click', hideIfClickedOutside);
  }, []);

  const handleChange = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const containerClasses = classNames(selectStyles['container'], className);
  const valueClasses = classNames(selectStyles['value'], { [selectStyles['selected']]: !!selected });
  const optionClasses = (option) => classNames(selectStyles['option'], { [selectStyles['active']]: selected && (option.value === selected.value) });

  return (
    <div
      className={containerClasses}
      onClick={(e) => e.stopPropagation()}
      tabIndex="0"
    >
      <div
        className={valueClasses}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectStyles['placeholder']}>{placeholder}</span>
        {selected ? selected.label : <span>&nbsp;</span>}
        <div className={selectStyles['chevron']}>
          <Chevron />
        </div>
      </div>
      {isOpen && (
        <div className={selectStyles['dropdown']}>
          {options.map((option, index) => (
            <div
              key={index}
              className={optionClasses(option)}
              onClick={() => handleChange(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  defaultValue: Option,
  options: PropTypes.arrayOf(Option),
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

Select.defaultProps = {
  className: '',
  defaultValue: null,
  onChange: null,
  options: [],
  placeholder: 'Выберите значение...'
};

export default Select;
