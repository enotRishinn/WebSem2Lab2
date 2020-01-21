import { fetchGeolocationSuccess, fetchGeolocationError, setLoadingTrue, setLoadingFalse } from './geolocationAction';

export function fetchWeatherByCoords(coords) {
 return function(dispatch) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=665c8e98e586f364800fd238b845d042&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              dispatch(fetchGeolocationSuccess(json));
            } else {
              let error = json.message;
              dispatch(fetchGeolocationError(error));
            }
          });
      },
      error => dispatch(fetchGeolocationError(error)));
  }
}
