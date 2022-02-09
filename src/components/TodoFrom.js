import React, {useState} from 'react';

const initialForm = {
    tittle: '',
    description: ''
}

const TodoForm = ( {todoAdd} ) =>{

    const [formValues, setFormValues] = useState(initialForm);
    const {tittle, description} = formValues;

    const handleInputChange = e => {
        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }

        setFormValues(changedFormValues);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        todoAdd(formValues);
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
        </div>
    );
};

export default TodoForm;