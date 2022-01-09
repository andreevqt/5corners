import React from 'react';
import { useIMask } from 'react-imask';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import textFieldStyles from './text-field.module.css';
import Icon from './icon/icon';

const TextField = ({
  className,
  id,
  value,
  defaultValue,
  label,
  name,
  onChange,
  onBlur,
  htmlType,
  startIcon,
  error,
  errorMsg,
  mask
}) => {
  const { ref } = useIMask({ mask });

  const onLabelClick = (e) => {
    e.preventDefault();
    ref.current.focus();
  };

  const classes = classNames(className, { [textFieldStyles['has-error']]: error });

  return (
    <div className={classes}>
      <div className={textFieldStyles['input-wrapper']}>
        {startIcon && <Icon onClick={onLabelClick}>{startIcon}</Icon>}
        <div className={textFieldStyles['inner']}>
          <input
            ref={ref}
            id={id}
            type={htmlType}
            placeholder={label}
            name={name}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onBlur={onBlur}
          />
          <span
            className={textFieldStyles['label']}
            onClick={onLabelClick}
          >
            {label}
          </span>
        </div>
      </div>
      {error && <div className={textFieldStyles['info']}>{errorMsg}</div>}
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  htmlType: PropTypes.oneOf(['text', 'password', 'email', 'phone']),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  startIcon: PropTypes.node,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  mask: PropTypes.string
};

TextField.defaultProps = {
  className: '',
  error: false,
  htmlType: 'text',
  errorMsg: 'Invalid value'
};

export default TextField;
