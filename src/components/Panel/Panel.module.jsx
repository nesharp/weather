import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './Panel.module.css'
import { getData } from '../../data'
import { store } from '../../store/root'
import { useNavigate } from 'react-router-dom'

export const Panel = ({ children }) => {
	const [city, setCity] = useState('Kyiv')
	const [image, setImage] = useState('')
	const input = useRef(null)
	const navigate = useNavigate()
	store.subscribe(() => {
		if (store.getState().weather.error !== 'error') {
			const id = store.getState().weather.list[0].weather[0].icon
			setImage(`http://openweathermap.org/img/w/${id}.png`)
		} else {
			navigate('/error')
		}
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
