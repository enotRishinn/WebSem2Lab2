import { fetchAddedCitiesSuccess, fetchAddedCitiesError } from './addedCitiesAction';

export function fetchWeatherByCityName(cityName) {
 return function(dispatch) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=665c8e98e586f364800fd238b845d042&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              dispatch(fetchAddedCitiesSuccess(json, cityName));
            } else {
              let error = json.message;
              dispatch(fetchAddedCitiesError(error, cityName));
            }
          });
      },
      error => dispatch(fetchAddedCitiesError(error, cityName)))
  }
}
