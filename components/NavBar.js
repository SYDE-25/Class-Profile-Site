import React from 'react';
import styles from './nav.module.scss';


const navBar = () => {
    return (
       
        <div className = {styles.header}>
            <ul className = {styles.bulletStyle} >
                <li> <button className = {styles.button}> Demographics </button></li>
                <li> <button className = {styles.button}> High School  </button> </li>
                <li> <button className = {styles.button}> Academics    </button> </li>
                <li> <button className = {styles.button}> Co-op        </button> </li>
                <li> <button className = {styles.button}> Lifestyle    </button> </li>
                <li> <button className = {styles.button}> Igor         </button> </li>
            </ul>
        </div>
        
    )
}

export default navBar
