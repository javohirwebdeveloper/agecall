import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBirthDate, calculateAge, setError, toggleDarkMode } from '../redux/actions';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Logo from "./images/Logo.svg"
const AgeCalculator = () => {
  const dispatch = useDispatch();
  const { birthDate, age, error, darkMode } = useSelector(state => state);

  const [day, setDay] = useState(birthDate.day);
  const [month, setMonth] = useState(birthDate.month);
  const [year, setYear] = useState(birthDate.year);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidDate(day, month, year)) {
      dispatch(setError('Please enter a valid date.'));
      return;
    }
    dispatch(setError(''));
    dispatch(setBirthDate({ day, month, year }));
    dispatch(calculateAge());
  };

  const isValidDate = (day, month, year) => {
    const date = new Date(year, month - 1, day);
    return (
      date.getDate() === parseInt(day) &&
      date.getMonth() + 1 === parseInt(month) &&
      date.getFullYear() === parseInt(year)
    );
  };

  return (
  <div className={` w-screen h-screen flex justify-center items-center duration-1000 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
    <div className={` duration-1000 box p-8 ${darkMode ? 'bg-gray-800 button1' : 'bg-white box'} rounded-3xl rounded-br-[180px] shadow-md w-full max-w-md mx-2 md:max-w-4xl md:p-16`}>
        <div className='flex justify-between'>
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className={` ${darkMode ? "button" : "button1"} duration-1000 top-0 flex justify-center items-center h-[60px] w-[60px] rounded-[50%] ${darkMode ? "bg-gray-700" : "bg-gray-800"} `}
        >
         <Player
  autoplay
  loop
  src={darkMode ? "https://lottie.host/109181c7-6ceb-4ec6-a09b-9de495c988e5/Cl9N7xN2OP.json" : "https://lottie.host/f429d290-1345-407f-a3e5-87006c77b035/PjLybL1WKs.json"}
  style={{ height: '70px', width: '70px' }}
>
  <Controls></Controls>
</Player> 
        </button>
      <p className={`text-red-500 mb-4 ${error ? 'visible' : 'invisible'}`}>{error}</p></div>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-600 dark:text-gray-400">DAY</label>
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={`border p-2 rounded-md  ${darkMode ? "bg-gray-800 border-gray-600 text-gray-200" : ""} ${error ? "border-red-600" : ""}`}
              placeholder="DD"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-600 dark:text-gray-400">MONTH</label>
            <input
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={`border p-2 rounded-md ${darkMode ? "bg-gray-800 border-gray-600 text-gray-200" : ""} ${error ? 'border-red-600' : ""}`}
              placeholder="MM"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-600 dark:text-gray-400">YEAR</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={`border p-2 rounded-md  ${darkMode ? "bg-gray-800 border-gray-600 text-gray-200" : ""} ${error ? "border-red-600" : ""}`}
              placeholder="YYYY"
            />
          </div>
        </div>
        <div className='flex items-center justify-center md:justify-end h-14'>
          <div className={`h-[2px] ${darkMode ? "bg-current" : "bg-[#ECECEC]"} w-full transition-width duration-[0.65s]`}></div>
        <button type="submit" className=" absolute bg-green-500 hover:bg-gray-600 text-white font-bold py-[20px] px-[20px] rounded-[50%] transition duration-300 w-20 h-20 flex justify-center items-center">
                   <img src={Logo} alt="logo"/>
        </button>
        </div>
        <div className="mt-8 text-left">
          <h2 className="text-3xl md:text-8xl font-bold text-green-500">{age.years} <span className="text-gray-600 dark:text-gray-400">years</span></h2>
          <h2 className="text-3xl md:text-8xl font-bold text-green-500">{age.months} <span className="text-gray-600 dark:text-gray-400">months</span></h2>
          <h2 className="text-3xl md:text-8xl font-bold text-green-500">{age.days} <span className="text-gray-600 dark:text-gray-400">days</span></h2>
        </div>
      </form>
    </div></div>
  );
};

export default AgeCalculator;
