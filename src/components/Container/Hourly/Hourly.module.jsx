import React from 'react'
import styles from './Hourly.module.css'
import { store } from '../../../store/root'
import { Block } from './Block/Block.module'
import { useState } from 'react'
export const Hourly = () => {
	const [daily, setDaily] = useState([])
	store.subscribe(() => {
		if (store.getState().weather.error !== 'error') {
			setDaily(
				store
					.getState()
					.weather.list.filter(item => item.dt_txt.includes('12:00:00'))
					.filter((item, index) => index !== 0)
			)
		}
	})
	return (
		<div className={styles.hourly}>
			{daily.map(item => (
				<Block info={item} key={item.dt} />
			))}
		</div>
	)
}
