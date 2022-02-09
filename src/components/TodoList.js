import React from 'react';
import Todo from './Todo';



const TodoList = ({todos, todoDelete, todoCompleted, setTodoEdit}) =>{

    return (
        <div>
            <h2 className='text-end display-4'>Lista de tareas</h2>
            {
                todos.length === 0
                ? <div className='alert alert-primary text-end'>No hay tareas pendientes</div>
                : todos.map(x => (
                    <Todo
                        todo={x}
                        key={x.id}
                        todoDelete={todoDelete}
                        todoCompleted={todoCompleted}
                        setTodoEdit = {setTodoEdit}
                    />
                ))
            }
        </div>
    )
};

export default TodoList;