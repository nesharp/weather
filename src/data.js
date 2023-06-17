import axios from 'axios'
import { weatherSlice } from './store/weather/weather.slice'
import {store} from './store/root'

const { setWeather } = weatherSlice.actions

export const lost_data = {
	location: {
		name: 'London',
		region: 'City of London, Greater London',
		country: 'United Kingdom',
		lat: 51.52,
		lon: -0.11,
		tz_id: 'Europe/London',
		localtime_epoch: 1631637114,
		localtime: '2021-09-14 21:18'
	},
	сurrent: {
		last_updated_epoch: 1631636400,
		last_updated: '2021-09-14 21:00',
		temp_c: 14.0,
		temp_f: 57.2,
		is_day: 0,
		condition: {
			text: 'Partly cloudy',
			long_desk:
				'As the sun began to dip below the horizon, casting a warm golden glow across the landscape, the atmosphere was charged with an electric anticipation.',
			icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
			image:
				'https://www.pngall.com/wp-content/uploads/2016/07/Sun-PNG-Image.png',
			background_image:
				'https://w7.pngwing.com/pngs/430/432/png-transparent-sky-background-sky-background-clouds-background-sunny-day.png',
			code: 1003
		},
		hourly: {
			first: {
				time: '00:00 - 03:00',
				temp_c: 12.0,
				text: 'Cloudy',
				image:
					'https://www.pngall.com/wp-content/uploads/2016/07/Sun-PNG-Image.png'
			},
			second: {
				time: '03:00 - 06:00',
				temp_c: 12.0,
				text: 'Party cloudy',
				image:
					'https://www.pngall.com/wp-content/uploads/2016/07/Sun-PNG-Image.png'
			},
			third: {
				time: '06:00 - 09:00',
				temp_c: 12.0,
				text: 'Party cloudy',
				image:
					'https://www.pngall.com/wp-content/uploads/2016/07/Sun-PNG-Image.png'
			},
			fourth: {
				time: '09:00 - 12:00',
				temp_c: 12.0,
				text: 'Cloudy',
				image:
					'https://www.pngall.com/wp-content/uploads/2016/07/Sun-PNG-Image.png'
			},
			fifth: {
				time: '12:00 - 15:00',
				temp_c: 12.0,
				text: 'Party cloudy',
				image:
					'https://www.pngall.com/wp-content/uploads/2016/07/Sun-PNG-Image.png'
			}
		}
	}
}


export const getData = async (city) => {
	const api = '1182ab6945b87085c019a0911b404b0d'
	let lat, lon
	const coordinates =  await axios({
		method: 'get',
		url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api}`,
		headers: {}
	}).then(response => {
		lat = response.data[0].lat
		lon = response.data[0].lon
	})

	// const response = await axios({
	// 	method: 'get',
	// 	url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`,
		
	// })
	const response = await axios({
		method: 'get',
		url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}`
	})
	store.dispatch(setWeather(response.data))
	return response
}
