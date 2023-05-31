import React from "react";
import styles from "./Block.module.css";

export const Block = (props) => {
    return (
        <div className={styles.block}>
            <h6> {props.info.time} </h6>
            <img src={props.info.image} alt="" />
            <h4>{props.info.text}</h4>
            <h5>{props.info.temp_c}°</h5>
        </div>)
}