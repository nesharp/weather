import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './Panel.module.css'
import { getData } from '../../data'
import { store } from '../../store/root'


export const Panel = ({ children }) => {
	const [city, setCity] = useState('Kyiv')
	const [image, setImage] = useState('')
	const input = useRef(null)
	store.subscribe(() => {
		const id = store.getState().weather.list[0].weather[0].icon
		setImage(`http://openweathermap.org/img/w/${id}.png`)
	})
	useEffect(() => {
		getData(city)
	}, [])
	return (
		<div className={styles.panel}>
			<input
				type='text'
				ref={input}
				onChange={e => {
					setCity(e.target.value)
				}}
				value={city}
				onKeyDown={e => {
					if (e.key === 'Enter') {
						getData(city)
						e.target.blur()
					}
				}}
			/>
			<img src={image} alt='' />
			{children}
		</div>
	)
}
