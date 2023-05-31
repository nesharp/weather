import React from "react";
import styles from "./Block.module.css";

export const Block = ({info}) => {
    return (
        <div className={styles.block}>
            <h6> {info.time} </h6>
            <img src={info.image} alt="" />
            <h4>{info.text}</h4>
            <h5>{info.temp_c}°</h5>
        </div>)
}