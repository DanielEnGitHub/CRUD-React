import React from 'react';

const Todo = ({todo, todoDelete, todoCompleted}) => {
    // const todo = props;
    return (
        <div className='card mt-2'>
            <div className='card-body'>
                <h3 className='card-tittle text-end'>
                    {todo.tittle}

                    <button
                        onClick={() => todoCompleted(todo.id)}
                        className={todo.completed ? 'btn btn-sm btn-success ms-2' : 'btn btn-sm btn-outline-success ms-2'}
                    >
                        { todo.completed ? 'TERMINADO' : 'TERMINAR' }
                    </button>

                </h3>

                <p className='card-text text-end'>
                    {todo.description}
                </p>
                <hr/>
                
                <div className='d-flex justify-content-end'>
                    <button
                        className='btn btn-sm btn-outline-primary me-2'
                    >
                        Editar
                    </button>

                    <button
                        onClick={() => todoDelete(todo.id)}
                        className='btn btn-sm btn-outline-danger'
                    >
                    Eliminar
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Todo;
