import React, { useMemo } from "react";
import styles from './Panel.module.css';
import { lost_data } from "../../data";





export const Panel = ({ children }) => {
    
    return(<div className={styles.panel}>
        <h2>{lost_data.location.name}</h2>
        {children}
    </div>)
}