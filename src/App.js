import React, {useState} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoFrom';

const initialTodos = [
    {
        id: 1,
        tittle: 'Todo 1',
        description: 'Descripcion del todo #1',
        completed: false
    },
    {
        id: 2,
        tittle: 'Todo 2',
        description: 'Descripcion del todo #2',
        completed: false
    }
]


const App = () =>{
    const [todos, setTodos] = useState(initialTodos);

    // Eliminar
    const todoDelete = (todoID) =>{
        const changedTodos = todos.filter( todo => todo.id !== todoID );
        setTodos(changedTodos);
    }

    // Completar
    const todoCompleted = (todoID) => {
        // const changedTodos = todos.map(todo => {
        //     const todoEdit = {
        //         ...todo,
        //         completed: !todo.completed
        //     }

        //     if (todo.id === todoID){
        //         return todoEdit
        //     }else{
        //         return todo
        //     }
        // });

        // const changedTodos = todos.map( todo => {
        //     return (
        //         todo.id === todoID 
        //         ? {...todo, completed: !todo.completed} 
        //         : todo
        //     )
        // } );

        const changedTodos = todos.map( todo => todo.id === todoID ? {...todo, completed: !todo.completed} : todo )

        setTodos(changedTodos);

    }

    const todoAdd = (todo) => {

        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }

        const changedTodos = [
            newTodo,
            ...todos
        ]
        setTodos(changedTodos);
    }

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <TodoList
                        todos={todos}
                        todoDelete = {todoDelete}
                        todoCompleted = {todoCompleted}
                    />
                </div>
                <div className='col-4'>
                    <TodoForm
                        todoAdd={todoAdd}
                    />
                </div>
            </div>
        </div>
    )
};

export default App;