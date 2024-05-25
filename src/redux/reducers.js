import { SET_BIRTH_DATE, CALCULATE_AGE, SET_ERROR, TOGGLE_DARK_MODE } from './actions';

const initialState = {
  birthDate: { day: "DD", month: "MM", year: "YYYY" },
  age: { years: "--", months: "--", days: "--" },
  error: null,
  darkMode: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BIRTH_DATE:
      return { ...state, birthDate: action.payload };
    case CALCULATE_AGE:
      return { ...state, age: calculateAgeFromBirthDate(state.birthDate) };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const calculateAgeFromBirthDate = ({ day, month, year }) => {
  const currentDate = new Date();
  let age = {
    years: currentDate.getFullYear() - year,
    months: currentDate.getMonth() + 1 - month,
    days: currentDate.getDate() - day
  };

  if (age.days < 0) {
    age.months -= 1;
    age.days += new Date(year, month, 0).getDate();
  }
  if (age.months < 0) {
    age.years -= 1;
    age.months += 12;
  }

  return age;
};

export default reducer;
