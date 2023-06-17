import React from 'react'
import styles from './errorPage.module.css'
import { Link } from 'react-router-dom'
export const ErrorPage = (props) => {
	return (
		<div className={styles.errorPage}>
            <h1>Error</h1>
            <div className={styles.info}>
                <h3>Something went wrong</h3>
                <Link to='/'>Home</Link>
            </div> 
		</div>
	)
}
