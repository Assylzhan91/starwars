import React from 'react'
import cls from "./styles.scss"

const TodoItem = ({todoItem, idx}) => {

    return (
        <li className={cls.li}>
            <strong className={cls.strong}>{idx+1}</strong>
            <p>{todoItem.title}</p>
            <input type="checkbox"/>
        </li>
    )
}

export default TodoItem
