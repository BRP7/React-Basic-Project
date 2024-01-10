import React, { useState } from 'react';

const styles = {
    container: {
      textAlign: 'center',
      margin: '0 auto',
      padding: '20px',
      width: '80%',
      maxWidth: '600px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      color: '#333',
    },
    form: {
      marginTop: '20px',
    },
    label: {
      fontWeight: 'bold',
    },
    input: {
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    result: {
      marginTop: '20px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#fff',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableCell :{
      padding: '8px',
      textAlign: 'left',
      border: '1px solid #ccc',
    },
  };
  

function CovidData() {
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  async function fetchData() {
    try {
      const url = 'https://data.covid19india.org/data.json';
      const response = await fetch(url);
      const data = await response.json();

      for (let i = 0; i < data.cases_time_series.length; i++) {
        if (date === data.cases_time_series[i].date) {
          setMessage(
            <table border='1' width='500px' color='red'>
              <tr>
                <td>NEW CASES</td>
                <td>{data.cases_time_series[i].dailyconfirmed}</td>
              </tr>
              <tr>
                <td>NEW DEATHS</td>
                <td>{data.cases_time_series[i].dailydeceased}</td>
              </tr>
            </table>
          );
          break;
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); fetchData(); }}>
        <label>Date : </label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>
      <p id="msg">{message}</p>
    </div>
  );
}

export default CovidData;













