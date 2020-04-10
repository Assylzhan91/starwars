import React, {useState, useEffect, lazy, Suspense} from 'react';
import TodoList from './Todo';
import Preloader from './Preloader/';
import Modal from './Modal';
import { Context } from './context';
<<<<<<< HEAD
import AddTodo from './AddTodo';

import app from './App.module.css';

/*const  AddTodo = lazy(()=>new Promise(resolve => {
    setTimeout(()=>{
        resolve(import('./AddTodo'))
    }, 1000)
}))*/
=======
import app from './App.module.css';

const  AddTodo = lazy(()=>new Promise(resolve => {
    setTimeout(()=>{
        resolve(import('./AddTodo'))
    }, 1000)
}))
>>>>>>> 6bb7c44ebb3d968becc41a339c2ffd0d92df5422

function App() {

    const [todosState, setTodos] = useState([])
    const [preloader, setPreloader] = useState(true)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
            .then(response => response.json())
            .then(todos => {
                setTimeout(()=>{
                    setTodos(todos)
                    setPreloader(false)
                }, 1000)
             })

    }, [])

    function checkboxHandler(idx){
        setTodos(
            todosState.map(todo =>{
                if(todo.id === idx){
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
     }

    function removeTodoItem(idx){
        setTodos(todosState.filter(({id})=>id !==idx))
    }

    function AddTodoItem(title){

        setTodos(
            todosState.concat([{
                title: title.trim(),
                completed: false,
                id: Date.now()
            }])
        )
    }

  return (
        <Context.Provider value={{removeTodoItem, AddTodoItem}}>
            <div className={app.wrapper}>
                <h1 className={app.mainTitle}>Todo list developed with hooks</h1>
                <Modal/>

                {
                    preloader
                    ? <div className={app['wrapper-center']}><Preloader/></div>
<<<<<<< HEAD
                    :   /*<Suspense fallback={<p>Loading....</p>}>*/
                            <AddTodo/>
                        /*</Suspense>*/
=======
                    :   <Suspense fallback={<p>Loading....</p>}>
                            <AddTodo/>
                        </Suspense>
>>>>>>> 6bb7c44ebb3d968becc41a339c2ffd0d92df5422
                 }
                <div className={preloader?  `${app.center}` : null}>
                {
                    preloader ?
                        <Preloader/>
                        : todosState.length
                            ?   <TodoList todos={todosState}
                                    checkboxHandler={checkboxHandler}
                                    removeTodoItem={removeTodoItem}
                                />
                            : <p>Not any todo, please add an todo</p>

                }
                </div>

            </div>
        </Context.Provider>
  );
}

export default App;
