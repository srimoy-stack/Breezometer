import Weather from './Weather';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const get_query = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const Get_data = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`);
      const get_res = await res.json();
      console.log(get_res);
      setResult(get_res);
    }
    Get_data()
  }, [query]);

  return (
    <div className="App">
      <h1>Search the weather of location</h1>
      <input className="input" type="search" value={query} onChange={get_query} />
      {result && result.weather && result.weather.length > 0 && ( // Add conditional checks for 'result' and 'result.weather'
        <Weather
          key={result.weather[0].id}
          name={result.name}
          des={result.weather[0].description}
          img={result.weather[0].icon}
          temp={result.main.temp}
        />
      )}
    </div>
  );
}

export default App;
