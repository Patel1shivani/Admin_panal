import React, { createContext, useContext, useState } from 'react';
import Chart from 'react-apexcharts';

// Create a ThemeContext to manage theme state
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const BarChat = () => {
  const { theme } = useContext(ThemeContext);

  const chartOptions = {
    chart: {
      toolbar: {
        show: false // Hiding toolbar for simplicity, adjust as needed
      },
      background: 'transparent', // Set chart background to transparent
      foreColor: theme === 'dark' ? '#fff' : '#333', // Set foreground color based on theme
    },
    plotOptions: {
      bar: {
        columnWidth: '60%', // Decrease the width of the columns
        colors: {
          ranges: [
            {
              from: 0,
              to: 20,
              color: '#000033' // Custom color for bars with value from 0 to 20
            },
            {
              from: 21,
              to: 40,
              color: '#008080' // Custom color for bars with value from 21 to 40
            },
            {
              from: 41,
              to: 60,
              color: '#400080' // Custom color for bars with value from 41 to 60
            },
            {
              from: 61,
              to: 80,
              color: '#00cc00' // Custom color for bars with value from 61 to 80 (changed to green)
            },
            {
              from: 81,
              to: 100,
              color: '#e60073' // Custom color for bars with value from 81 to 100
            }
          ],
          backgroundBarOpacity: 1
        }
      }
    },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
      axisBorder: {
        show: true, // Show x-axis lines
        color: theme === 'dark' ? '#fff' : '#333' // Set axis border color based on theme
      },
      axisTicks: {
        show: false // Hide x-axis ticks
      },
      labels: {
        style: {
          colors: theme === 'dark' ? '#fff' : '#333', // Set x-axis label color based on theme
        },
        rotate: -45 // Rotate x-axis labels to -45 degrees
      }
    },
    yaxis: {
      min: 0,
      max: 40,
      labels: {
        style: {
          colors: theme === 'dark' ? '#fff' : '#333' // Set y-axis label color based on theme
        }
      }
    },
    grid: {
      show: false // Hide grid lines
    }
  };

  const chartSeries = [
    {
      name: 'weeks',
      data: [20, 30, 27, 42, 22]
    }
  ];

  // Calculate width based on screen size
  const chartWidth = window.innerWidth > 768 ? 750 : window.innerWidth - 40;

  return (
    <div className={`container-fluid mb-5 containerht ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <div className="pr-10">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type='bar'
          width={chartWidth}
          height={300} // Fixed height for all screens
        />
      </div>
    </div>
  );
};

const Dashboard = () => {

  return (
    <div>
      <BarChat />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
