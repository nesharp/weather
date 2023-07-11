import axios from 'axios'
import { store } from '../store/root'
import { weatherSlice } from '../store/weather/weather.slice'
import { Navigate, useNavigate } from 'react-router-dom'
const api = '1182ab6945b87085c019a0911b404b0d'
const { setWeather } = weatherSlice.actions
export const useWeather = async city => {
	let lat, lon
	const coordinates = await axios({
		method: 'get',
		url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${
			process.env.REACT_APP_API_KEY || api
		}`,
		headers: {}
	}).then(response => {
		lat = response.data[0].lat
		lon = response.data[0].lon
	})
	const response = await axios({
		method: 'get',
		url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
			process.env.REACT_APP_API_KEY || api
		}`
	}).catch(error => {
		return error
	})
	const { data } = response
	store.dispatch(setWeather(data))
	return response
}
