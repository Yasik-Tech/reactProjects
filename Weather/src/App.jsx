import { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import './App.css'
import searchIcon from "./assets/search.png";
import snowIcon from "./assets/snow.png";
import sunIcon from "./assets/sun.png";
import stromIcon from "./assets/strom.png";
import cloudIcon from "./assets/cloud1.png";
import warmIcon from "./assets/warm.png";
import eveningIcon from "./assets/cloudysun.png";
import rainIcon from "./assets/rain1.png";
import windSpeedIcon from "./assets/wind-speed.png"

const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
  return (
    <>
      <div className='image'>
        <img src={icon} alt="image" />
      </div>

      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>

      <div className="cord">
        <div>
          <span className='lat'>Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className='log'>Longitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={warmIcon} alt="Icon" className='icon' />
          <div className='data'>
            <div className="humidity-percentage">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={windSpeedIcon} alt="Icon" className='icon' />
          <div className='data'>
            <div className="wind-speed">{wind}km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

WeatherDetails.propType = {
  icon: propTypes.string.isRequired,
  temp: propTypes.number.isRequired,
  city: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  lat: propTypes.number.isRequired,
  log: propTypes.number.isRequired,
  humidity: propTypes.number.isRequired,
  wind: propTypes.string.isRequired,
}

function App() {

  let api_key = "0ba499c432ba2d374bcf4f2f59533054";
  const [text, setText] = useState("chennai");

  const [icon, setIcon] = useState(cloudIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  const [error, setError] = useState(null);

  const weatherIcons = {
    "01d": sunIcon,
    "01n": sunIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03n": eveningIcon,
    "03d": eveningIcon,
    "04n": rainIcon,
    "04d": rainIcon,
    "09d": rainIcon,
    "09n": stromIcon,
    "10d": stromIcon,
    "10n": snowIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  }


  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data)
      if (data.cod == "404") {
        console.error("City Not found");
        setCityNotFound(true);
        setLoading(false);
      }

      setCity(data.name);
      setTemp(Math.floor(data.main.temp));
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);

      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIcons[weatherIconCode] || rainIcon);

    } catch (error) {

      console.log("Error is occurred", error.message);
      setError("Error is occurred during search");

    } finally {
      setLoading(false)

    }
  }

  const handleCity = (e) => {
    setText(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      search();
    }
  }
  useEffect(function () {
    search();
  }, []);


  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type="text" className='search-input' placeholder='Search City'
            onChange={handleCity} value={text} onKeyDown={handleKeyDown} />

          <div className='img-input' onClick={() => search()}>
            <img src={searchIcon} alt="Search" />
          </div>
        </div>

        {loading && <div className='loading-message'>Loading...</div>}
        {cityNotFound && <div className='city-not-found'>City Not Found</div>}
        {error && <div className='error-message'>{setError}</div>}
        

        {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat}
          log={log} wind={wind} humidity={humidity} />}

        <div className="copyrights">
          <p>Designed by <span>Yasik</span></p>
        </div>
      </div>
    </>
  )
};

export default App
