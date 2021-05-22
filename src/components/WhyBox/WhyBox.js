import React from 'react';
import styles from './WhyBox.module.css';

const WhyBox = ({title, description, color, image}) => {

    return(
        <div className={styles.container}>
            <div className={styles.circle} style={{backgroundColor: color}}>
                <img src={image} className={styles.image} alt={`${title} ${description}`}/>
            </div>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
        </div>
    )

}

export default WhyBox;