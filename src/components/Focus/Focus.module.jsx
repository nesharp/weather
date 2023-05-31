import React from "react";
import styles from './Focus.module.css';

export const Focus = ({ children }) => {
    
        return(<div className={styles.focus}>
            {children}
        </div>)
    }