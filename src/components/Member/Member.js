import React from 'react';
import styles from './Member.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const MemberRight = ({title, description, image, name, linkedIn}) => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} alt={`${title} ${description}`}/>
                <h3 className={styles.name}>{name}</h3>
            </div>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.socialsContainer}>
                    <a className={styles.socialButton} href={linkedIn} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

const MemberLeft = ({title, description, image, name, linkedIn}) => {
    return(
        <div className={styles.container2}>
            <div className={styles.textContainer2}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.socialsContainer2}>
                    <a className={styles.socialButton} href={linkedIn} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} alt={`${title} ${name}`}/>
                <h3 className={styles.name}>{name}</h3>
            </div>
        </div>
    );
}

export {MemberLeft, MemberRight};

export default MemberLeft;