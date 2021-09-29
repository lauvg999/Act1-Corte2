import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState({});

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([
    {
      todo: 'todo 1',
      complete: false,
      edit: false
    }, 
  ]);

  // Esto maneja el cambio del input
  const handleChange = (e) => setTodo({ [e.target.name]: e.target.value, complete:false, edit:false });

  // Esto es cuando lo agrego - o doy enter
  const handleClick = (e) => {
    // Verifico que el input no este vacio
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
      alert('El campo no puede estar vacio.');
      return;
    }
    setTodos([...todos, todo]);
  };

  //checkbox
  const actTodo = (index,todo) => {
    todos[index].complete= !todos[index].complete
    setTodos([...todos]) 
  }

  // Elimina el todo
    const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1); //elimina el index en la posicion 1
    setTodos(newTodos);
  };

  // Editar el todo
  const actEdit = (index) => {
    todos[index].edit= !todos[index].edit
    setTodos([...todos])
  };
  
  // Actualizar el todo
  const updateTodo = (index, value)=>{
    todos[index].todo = value;
    setTodos([...todos])
  }


  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Agregar Todo</label>

        <input type='text' name='todo' onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </form>
      {todos.map((value, index) => (
        <Todo
          todo={todos[index]}
          key={index}
          index={index}
          actTodo={actTodo}
          deleteTodo={deleteTodo}
          actEdit={actEdit}
          updateTodo={updateTodo}
        />
      ))}
    </>
  );
};

export default Form;
