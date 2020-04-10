import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap'


const TodoList =({todos, checkboxHandler}) => {

    return (
        <ListGroup >
        {
            todos.map((todo, idx)=>{
                return (
                    <TodoItem
                        todoItem={todo}
                        key={todo.id}
                        idx={idx}
                        checkboxHandler={checkboxHandler}
                    />
                )
            })
        }
        </ListGroup>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    checkboxHandler: PropTypes.func.isRequired,

}

export default TodoList
