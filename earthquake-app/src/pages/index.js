import React from 'react';
import App from './App'; // Assuming App is moved to the components folder
import './index.css'; // Adjust the path to your CSS file
import reportWebVitals from './reportWebVitals';

const Home = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};


reportWebVitals();

export default Home;

