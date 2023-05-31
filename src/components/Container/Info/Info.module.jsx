import React from "react";
import styles from "./Info.module.css";
import { lost_data } from "../../../data";
export const Info = ({children}) => {
    return (
        <div className={styles.info}>
            <h3>Local time: <span> {lost_data.location.localtime} </span></h3>
            <h4> {lost_data.сurrent.condition.text} </h4>
            <p> {lost_data.сurrent.condition.long_desk} </p>
            {children }
        </div>
    

        
    );
}