import React from 'react';
import Todo from './Todo';

const todos = [
    {
        tittle: 'Todo 1',
        description: 'Descripcion del todo #1',
        completed: false
    },
    {
        tittle: 'Todo 2',
        description: 'Descripcion del todo #2',
        completed: false
    }
]

const TodoList = () =>{
    return (
        <div>
            <h1>Soy TodoList</h1>
            {
                todos.map(x => <Todo todo={x} />)
            }
        </div>
    )
};

export default TodoList;