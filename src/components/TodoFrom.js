import React, {useState, useEffect} from 'react';

const initialForm = {
    tittle: '',
    description: ''
}

const TodoForm = ( {todoAdd, todoEdit, todoUpdate, setTodoEdit} ) =>{

    const [formValues, setFormValues] = useState(initialForm);
    const {tittle, description} = formValues;
    const [error, setError] = useState(null);
    const [successMS, setsuccessMS] = useState(null);

    useEffect(() => {
        if (todoEdit){
            setFormValues(todoEdit);
        }else{
            setFormValues(initialForm);
        }
    }, [todoEdit])
    

    const handleInputChange = e => {
        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }

        setFormValues(changedFormValues);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (tittle.trim() === ''){
            setError('No puedes dejar el titulo en blanco');
            return;
        }

        if (description.trim() === ''){
            setError('No puedes dejar la descripcion en blanco');
            return;
        }

        if (todoEdit){
            todoUpdate(formValues);
            setsuccessMS('La nueva tarea se actualizo correctamente');
        }else{
            todoAdd(formValues);
            setsuccessMS('La nueva tarea se agrego correctamente');
            setFormValues(initialForm);
        }


        setTimeout(() =>{
            setsuccessMS(null);
        }, 2000);

        setError(null);
        
    }

    return (
        <div>
            <h2 className='text-center display-4'>{todoEdit ? 'Editar tarea': 'Nueva tarea'}</h2>
            {
                todoEdit &&
                <button 
                onClick={() => setTodoEdit(null) }
                className='btn btn-sm btn-warning mb-2'>Cancelar</button>
            }
            
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Titulo'
                    className='form-control'
                    value={tittle}
                    name='tittle'
                    onChange={handleInputChange}
                />

                <textarea 
                    placeholder='Descripcion'
                    className='form-control mt-2'
                    value={description}
                    name='description'
                    onChange={handleInputChange}
                />

                <button
                    className='btn btn-primary btn-block mt-2'
                >
                    {todoEdit ? 'Actualizar': 'Agregar Tarea'}
                </button>
            </form>

            {
                error 
                && (
                    <div className='alert alert-danger mt-2'>
                        {error}
                    </div>
                )
            }

            {
                successMS
                && (
                    <div className='alert alert-success mt-2'>
                        {successMS}
                    </div>
                )
            }
            
        </div>
    );
};

export default TodoForm;