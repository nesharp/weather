import React from 'react'
import styles from './Info.module.css'
import { useState } from 'react'
import { store } from '../../../store/root'
export const Info = ({ children }) => {
	let localTime = new Date().getHours() + ':' + new Date().getMinutes()
	const [desc, setDesk] = useState('')
	const [wind, setWind] = useState({})
	store.subscribe(() => {
		if (store.getState().weather.error !== 'error') {
			setDesk(store.getState().weather.list[0].weather[0].description)
			setWind(store.getState().weather.list[0].wind)
		}
	})
	return (
		<div className={styles.info}>
			<div className={styles.wrapper}>
				<div className={styles.desc}>
					<h3>
						Local time: <span> {localTime} </span>
					</h3>
					<h4> {desc} </h4>
				</div>
				<div className={styles.wind}>
					<h3>Wind</h3>
					<h4>Speed: { wind.speed }</h4>
					<h4>Gust: { wind.gust }</h4>
					<h4>Deg: { wind.deg }</h4>
					
				</div>
			</div>
			{children}
		</div>
	)
}
