import React from 'react';
import styles from './Hourly.module.css';
import { Block } from './Block/Block.module';
import { lost_data } from '../../../data';

export const Hourly = ({children}) => {
    return (
        <div className={styles.hourly}>
            <Block info={lost_data.сurrent.hourly.first} ></Block>
            <Block info={lost_data.сurrent.hourly.second} ></Block>
            <Block info={lost_data.сurrent.hourly.third} ></Block>
            <Block info={lost_data.сurrent.hourly.fourth} ></Block>
            <Block info={lost_data.сurrent.hourly.fifth} ></Block>
            {children}
        </div>)
}