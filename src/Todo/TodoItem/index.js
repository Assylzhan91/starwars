import React, {useContext} from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { Context } from '../../context'
import cls from "./todo-item.module.css"
import PropTypes from 'prop-types'


const TodoItem = ({todoItem, idx, checkboxHandler}) => {
    let span = []

    if(todoItem.completed){
        span.push(cls.span)
    }
    const {removeTodoItem } =  useContext(Context)
    return (

        <ListGroup.Item variant="success mb-4" className={cls.li}>
            <p className={cls.wrapper}>
                <input className={cls.input}
                       type="checkbox"
                       onChange={()=>checkboxHandler(todoItem.id)}
                       checked={todoItem.completed}
                />
                  <strong className={cls.strong}>{idx+1}. </strong>
                <span className={span.join(' ')}>{todoItem.title}</span>
            </p>

            <Button variant="warning"
                    onClick={()=>removeTodoItem(todoItem.id)}
                >&times;</Button>
        </ListGroup.Item>
    )
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    checkboxHandler: PropTypes.func.isRequired,

}
export default TodoItem
