import P from 'prop-types';
import React from 'react';

import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="textInput"
      value={searchValue}
      onChange={handleChange}
      placeholder="Informe o titulo do post"
      type="search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
