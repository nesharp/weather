import React from 'react'
import { lost_data } from '../../../../src/data.js'
import styles from './Temperature.module.css'
import { useState } from 'react'
import { store } from '../../../store/root'
import { toCelsius } from '../../../logic/logic.js'
export const Temperature = () => {
	const [temp, setTemp] = useState(0)
	const [tempMax, setTempMax] = useState(0)
	const [tempMin, setTempMin] = useState(0)
	const [feels, setFeels] = useState(0)
	store.subscribe(() => {
		const temps = store.getState().weather.list[0].main
		setTemp(toCelsius(temps.temp))
		setTempMax(toCelsius(temps.temp_max))
		setTempMin(toCelsius(temps.temp_min))
		setFeels(toCelsius(temps.feels_like))
	})
	return (
		<div className={styles.wrapper}>
			<h2>Temperatures</h2>
			<div className={styles.temps}>
				<h4>
					Temperature: <span>{temp}°C</span>
				</h4>
				<h4>
					Feels like: <span>{feels}°C</span>
				</h4>
				<h4>
					Max: <span>{tempMax}°C</span>
				</h4>
				<h4>
					Min: <span>{tempMin}°C</span>
				</h4>
			</div>
		</div>
	)
}
