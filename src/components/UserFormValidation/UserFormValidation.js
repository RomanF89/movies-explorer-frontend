import React, { useState, useCallback } from 'react';


function UserFormValidation(customHandlers) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsvalid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (customHandlers[name]) {
      e.target.setCustomValidity(customHandlers[name](value))
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsvalid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsvalid(newIsValid);
    }, [setValues, setErrors, setIsvalid]
  );

  return { values, handleChange, errors, isValid, resetForm ,setValues };
}

export default UserFormValidation;
