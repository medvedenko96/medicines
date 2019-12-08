const validate = values => {
  const errors = {};

  if (!values.code) {
    errors.code = 'Required';
  } else if (values.code.length < 5) {
    errors.code = 'Min 5 letters';
  } else if (values.code.length > 10) {
    errors.code = 'Max 10 letters';
  }

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 5) {
    errors.name = 'Min 5 letters';
  } else if (values.name.length > 100) {
    errors.name = 'Max 100 letters';
  }

  if (!values.price) {
    errors.price = 'Required';
  } else if (isNaN(Number(values.price))) {
    errors.price = 'Must be a number';
  } else if (Number(values.price) < 0.01) {
    errors.price = 'Min number 0.01';
  } else if (Number(values.price) > 1000000) {
    errors.price = 'Max number 1000000';
  }

  if (!values.shelfLife) {
    errors.shelfLife = 'Required';
  } else if (isNaN(Number(values.shelfLife))) {
    errors.shelfLife = 'Must be a number';
  } else if (Number(values.shelfLife) < 1) {
    errors.shelfLife = 'Min number 1';
  } else if (Number(values.shelfLife) > 1000) {
    errors.shelfLife = 'Max number 1000';
  }

  if (!values.compositionAndFormOfRelease) {
    errors.compositionAndFormOfRelease = 'Required';
  } else if (values.compositionAndFormOfRelease.length > 2000) {
    errors.compositionAndFormOfRelease = 'Max 2000 letters';
  }

  if (!values.indication) {
    errors.indication = 'Required';
  } else if (values.indication.length > 2000) {
    errors.indication = 'Max 2000 letters';
  }

  if (!values.contraindications) {
    errors.contraindications = 'Required';
  } else if (values.contraindications.length > 2000) {
    errors.contraindications = 'Max 2000 letters';
  }

  return errors;
};

export default validate;
