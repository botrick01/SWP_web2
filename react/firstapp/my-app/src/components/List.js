import React from 'react'
import styles from './List.module.css'
import { useState } from 'react'

export default function List(props) {
  return (
    <div className={styles.main}>
        {props.items.map((item) => (
            <ListItem name={item}></ListItem>
        ))}
    </div>
  )
}

function ListItem(props) {
    const [active, toggelActive] = useState(false);
    return (
        <div
        onMouseOver={() => {
            toggelActive(!active);
        }}
        className={active ? styles.active : styles.inactive}
        >
        {props.name}
        </div>
    )
    }