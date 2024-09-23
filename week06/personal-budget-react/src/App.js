import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [chartData, setChartData] = useState(null);

  // Fetch data with Axios in useEffect
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts') // Replace with your actual API
      .then(response => {
        // Example: Transform the data if needed
        const transformedData = {
          labels: ['Eating out', 'Grocery', 'Rent'],
          values: [50, 110, 250] // Example static values; replace with response.data if needed
        };
        setChartData(transformedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
      <Menu />
      <Hero />
      <div className="mainContainer">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage chartData={chartData} />} />
        </Routes>
        {chartData && <div>Data fetched: {JSON.stringify(chartData)}</div>} {/* Display fetched data */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
