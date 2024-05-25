export const SET_BIRTH_DATE = 'SET_BIRTH_DATE';
export const CALCULATE_AGE = 'CALCULATE_AGE';
export const SET_ERROR = 'SET_ERROR';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const setBirthDate = (birthDate) => ({
  type: SET_BIRTH_DATE,
  payload: birthDate
});

export const calculateAge = () => ({
  type: CALCULATE_AGE
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE
});
