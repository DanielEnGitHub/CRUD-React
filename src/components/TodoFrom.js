import React, {useState} from 'react';

const initialForm = {
    tittle: '',
    description: ''
}

const TodoForm = ( {todoAdd} ) =>{

    const [formValues, setFormValues] = useState(initialForm);
    const {tittle, description} = formValues;
    const [error, setError] = useState(null);
    const [successMS, setsuccessMS] = useState(null);

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
        todoAdd(formValues);


        setsuccessMS('La nueva tarea se agrego correctamente');
        setTimeout(() =>{
            setsuccessMS(null);
        }, 2000)

        setFormValues(initialForm);
        setError(null);
        
    }

    return (
        <div>
            <h1>Nueva tarea</h1>
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
                    Agregar Tarea
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