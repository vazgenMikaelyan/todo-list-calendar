import React from 'react';

import './HeaderComponent.css';

function HeaderComponent(props) {
  const inCompleted = props.todoList.filter(todo => {
     return todo.complete === false;
  });
  return (
    <header className="header">
        {`${props.todoList.length} to do items (${inCompleted.length} of them incomplete)`}
    </header>
  );
}

export default HeaderComponent;