import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
  return (
    <div className={props.man ? styles.man : styles.woman}>
        {props.man ? (<img src='/man.png'></img>) : (<img src='/woman.png'></img>)}
        <div>{props.name}</div>
        <div>{props.profession}</div>
    </div>
  )
}