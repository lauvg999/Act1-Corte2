import React from 'react';

const Todo = ({ todo, index, deleteTodo, actTodo, actEdit, updateTodo }) => {
  return (
    <>
      <div className='list'>

        <input type="checkbox" className="order" checked={todo.complete} onChange={() => actTodo(index,todo)}/>

        {!todo.edit && <h3>{todo.todo}</h3>}

        {!todo.edit &&
        <button className='btn-edit' onClick={() => actEdit(index)}>
          EDITAR
        </button> 
        }

        {todo.edit && <input type="text" placeholder={todo.todo} onChange={(e) => updateTodo(index, e.target.value)}/>}

        {todo.edit &&
        <button className='btn-save' onClick={() => actEdit(index)}>
          GUARDAR
        </button>
        }

        <button className='btn-delete' onClick={() => deleteTodo(index)}>
          X
        </button>

      </div>
    </>
  );
};

export default Todo;
 