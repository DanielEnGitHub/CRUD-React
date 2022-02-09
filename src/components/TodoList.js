import React from 'react';
import Todo from './Todo';



const TodoList = ({todos, todoDelete, todoCompleted, setTodoEdit}) =>{

    return (
        <div>
            <h1>Soy TodoList</h1>
            {
                todos.map(x => (
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