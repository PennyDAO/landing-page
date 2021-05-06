import React from 'react';
import styles from './Basics.module.css';
import bottomArrow from '../../images/bottom-arrow.svg'

const Basics = ({title, description, graphic}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <img src={bottomArrow} className={styles.bottomArrow}/>
        </div>
    )
}

export default Basics;