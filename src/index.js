import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import geolocationReducer from './reducers/geolocationReducer';
import addedCitiesReducer from './reducers/addedCitiesReducer';
import thunk from "redux-thunk";

const weatherStore = createStore (combineReducers({
geolocation : geolocationReducer,
cities : addedCitiesReducer,
})
, applyMiddleware(thunk));

weatherStore.subscribe(() => {
  localStorage.setItem('added_cities', JSON.stringify([...weatherStore.getState().cities.added_cities.keys()]));
});

ReactDOM.render(
<Provider store = {weatherStore}>
  <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
