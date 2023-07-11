import React, { useState } from 'react'
import styles from './Block.module.css'
import { toCelsius } from '../../../../logic/logic'

export const Block = ({ info }) => {
	const [date, setDate] = useState(info.dt_txt.split(' ')[0])
	const [id, setId] = useState(info.weather[0].icon)
	const [temp, setTemp] = useState(toCelsius(info.main.temp))
	return (
		<div className={styles.block}>
			<h6>{date} </h6>
			<img src={`https://openweathermap.org/img/w/${id}.png`} alt='' />
			<h5>{temp}°C</h5>
		</div>
	)
}
