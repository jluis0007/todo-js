
import './styles.css';

import { Todo, TodoList  } from './classes';
import { crearTodoHtml  } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ));
// esta funcion de arriba es exactamente igual a la de abjo porque solo se esta pasando 1 solo argumento ( todo )
todoList.todos.forEach( crearTodoHtml );


// const tarea = new Todo('Aprender JavaScript');
// //const tarea2 = new Todo('Aprender GitHub');

// todoList.nuevoTodo( tarea );
// //todoList.nuevoTodo( tarea2 );

console.log( 'todos', todoList.todos );
// console.log(todoList);
// crearTodoHtml( tarea );
 