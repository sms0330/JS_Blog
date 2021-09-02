import React from 'react';
import '../index.css';

const FormErrors = props => {
  const { errors = [], forField } = props;

  let filteredErrors = errors;

  if (forField) {
    console.log(`Errors: ${filteredErrors}`);
    filteredErrors = errors.filter(err => err.field.toLowerCase() === forField.toLowerCase());
  }

  return (
    <ul className="FormErrors">
      {filteredErrors.map((error, i) => (
        <li key={i}>
          {error.field}: {error.message}
        </li>
      ))}
    </ul>
  );
};

export default FormErrors;
