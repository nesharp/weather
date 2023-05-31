import React from 'react';
import styles from './Hourly.module.css';
import { getData } from '../../../logic/getData';

export const Hourly = ({children}) => {

    return (
        <div className={styles.hourly}>
            {getData()}
            {children}
        </div>)
}
