import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AgeCalculator from './components/AgeCalculator';


function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex justify-center items-center bg-gray-200 dark:bg-gray-800 ">
        <AgeCalculator />
      </div>
    </Provider>
  );
}

export default App;
