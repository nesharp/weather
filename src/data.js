import axios from 'axios'
import { weatherSlice } from './store/weather/weather.slice'
import { store } from './store/root'
const { setWeather } = weatherSlice.actions

export const getData = async city => {
	const api = '1182ab6945b87085c019a0911b404b0d'
	let lat, lon
	const coordinates = await axios({
		method: 'get',
		url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api}`,
		headers: {}
	})
		.then(response => {
			lat = response.data[0].lat
			lon = response.data[0].lon
		})
		.catch(error => {
			// console.log(error)
			return store.dispatch(setWeather({ error: 'error' }))
		})

	const response = await axios({
		method: 'get',
		url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}`
	}).catch(error => {
		return store.dispatch(setWeather({ error: 'error' }))
	})
	if (response.payload?.error === undefined) {
		store.dispatch(setWeather({ ...response.data, error: null }))
	}

	return response
}
