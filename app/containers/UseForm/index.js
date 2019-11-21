/* eslint-disable prefer-destructuring */
/**
 *
 * UseForm
 *
 */

import { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

export function UseForm(stateSchema, validationSchema = {}, callback) {
  const [state, setState] = useState(stateSchema);
  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setDisable(true);
  }, []);

  // For every changed in our state this will be fired
  // to be able to disable the button
  useEffect(() => {
    if (isDirty) {
      setDisable(validateState());
    }
  }, [state, isDirty]);

  // Used to disable submit button if there's an error in state
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the function to avoid intensive emory leaked
  // in every re-render in component
  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some(key => {
      const isInputFieldRequired = validationSchema[key].required;
      const stateValue = state[key].value; // state value
      const stateError = state[key].error; // state error

      return (isInputFieldRequired && !stateValue) || stateError;
    });
    return hasErrorInState;
  }, [state, validationSchema]);

  // Used to handle every changes in every input
  const handleOnChange = useCallback(
    event => {
      setIsDirty(true);

      const name = event.target.name;
      const value = event.target.value;

      let error = '';
      if (validationSchema[name].required) {
        if (!value) {
          error = 'This is a required field.';
        }
      }
      if (
        validationSchema[name].validation !== null &&
        typeof validationSchema[name].validation === 'object'
      ) {
        if (value && !validationSchema[name].validation.regEx.test(value)) {
          error = validationSchema[name].validator.error;
        }
      }

      setState(prevState => ({
        ...prevState,
        [name]: { value, error },
      }));
    },
    [validationSchema],
  );

  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault();

      // Make sure that validateState returns false
      // before calling the submit callback function
      if (!validateState()) {
        callback(state);
      }
    },
    [state],
  );
  return { state, disable, handleOnChange, handleOnSubmit };
}

export default connect()(UseForm);
