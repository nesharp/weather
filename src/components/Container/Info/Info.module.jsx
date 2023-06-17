import React from 'react'
import styles from './Info.module.css'
import { useState } from 'react'
import { store } from '../../../store/root'
export const Info = ({ children }) => {
	let localTime = new Date().getHours() + ':' + new Date().getMinutes()
	const [desc, setDesk] = useState('')
	store.subscribe(() => {
		setDesk(store.getState().weather.list[0].weather[0].main)
	})
	return (
		<div className={styles.info}>
			<h3>
				Local time: <span> {localTime} </span>
			</h3>
			<h4> {desc} </h4>
			
			{children}
		</div>
	)
}
