import axios from "axios";

import MapStyles from "../styles/components/Map.module.css";
import { useEffect, useState } from "react";

const Map = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState();

  console.log(query);

  const fetch = async () => {
    const { data } = await axios.get("/countries.json");
    console.log(data);
    setCountries(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.country?.toLowerCase().startsWith(query?.toLowerCase())
  );

  console.log(filteredCountries);

  return (
    <div className={MapStyles.map_overlap}>
      <div className={MapStyles.search_container}>
        <div>
          <label htmlFor="country"></label>
          <input
            type="text"
            name="country"
            id="country"
            onChange={(e) => setQuery(e.target.value)}
            className={MapStyles.input}
          />
        </div>

        {filteredCountries.length == 0 ? (
          <div>
            {countries.map((country, index) => (
              <p key={index}>{country.country}</p>
            ))}
          </div>
        ) : (
          <>
            <div className={MapStyles.country_name}>
              {filteredCountries.map((country, index) => (
                <div key={index}>
                  <p>{country.country}</p>
                  {filteredCountries.length < 5 && (
                    <img
                      src={country.flag}
                      alt=""
                      key={index}
                      className={MapStyles.country_image}
                    />
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Map;
