import React from 'react';
import D3Chart from './D3Chart'; // Ensure this path is correct
import { Pie } from 'react-chartjs-2';

function HomePage({ chartData }) {
  // Default data in case chartData is null
  const defaultData = {
    labels: ['Eating out', 'Grocery', 'Rent'],
    values: [50, 110, 250] // Example static values; replace if needed
  };

  // Prepare data for Pie chart
  const pieData = {
    labels: chartData ? chartData.labels : defaultData.labels,
    datasets: [
      {
        label: 'Expenses',
        data: chartData ? chartData.values : defaultData.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <main className="center" id="main">
      <div className="page-area">
        <article>
          <h2>Stay on track</h2>
          <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
          </p>
        </article>

        <article>
          <h2>Alerts</h2>
          <p>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </p>
        </article>

        <article>
          <h2>Results</h2>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they live happier lives... since they spend without guilt or fear...
            because they know it is all good and accounted for.
          </p>
        </article>

        <article>
          <h2>Free</h2>
          <p>
            This app is free! And you are the only one holding your data!
          </p>
        </article>

        <article>
          <h2>Chart</h2>
          <div style={{ width: '100%', height: '300px', position: 'relative' }}>
            <Pie data={pieData} options={options} />
          </div>
        </article>

        <article>
          <h2>D3JS Chart</h2>
          <div className="chart-container" style={{ width: '100%', height: '300px' }}>
            <D3Chart data={chartData ? chartData.values : defaultData.values} />
          </div>
        </article>
      </div>
    </main>
  );
}

export default HomePage;
