import React from "react";
import {lost_data} from '../../../../src/data.js'
import styles from './Temperature.module.css'
export const Temperature = () => {



    return(<div className={styles.wrapper} >
        <h2> {lost_data.сurrent.temp_c}<span>°</span></h2>
        <img src={lost_data.сurrent.condition.image} />
    </div>)
}
