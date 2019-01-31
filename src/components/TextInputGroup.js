import React from 'react'
import PropTypes from 'prop-types'

const TextInputGroup = props => {
  const {
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    error,
    autofocus,
  } = props

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        autoFocus={autofocus}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={
          //* className value modified based on 'props.error'
          error
            ? 'form-control form-control-lg is-invalid'
            : 'form-control form-control-lg'
        }
      />
      {/*//* only visible if 'is-invalid' class is on input above */}
      <div className="invalid-feedback">{error}</div>
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  autofocus: PropTypes.bool,
}

TextInputGroup.defaultProps = {
  type: 'text',
}

export default TextInputGroup
