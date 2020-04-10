import React from 'react'
import TodoItem from './TodoItem'
const styles = {

}


const TodoList =({todos}) => {

    return (
        <ul style={styles}>
        {
            todos.map((todo, idx)=>{
                return (
                    <TodoItem
                        todoItem={todo}
                        key={todo.id}
                        idx={idx}
                    />
                )
            })
        }
        </ul>
    )
}

export default TodoList
