import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Form/Button'
import HeaderComponent from '../Header'
import TableComponent from '../Table'

import ModalComponent from './Modal'
import {addTodoAction, completeTodoAction, removeTodoAction} from '../../store/actions'

function DatePageComponent(props) {

  let [showModal, setShowModal] = useState(false) ;
  let todoList     = useSelector(state => state.todos);
  let selectedDate = useSelector(state => state.date);

  const dispatch    = useDispatch();
  const queryString = new URLSearchParams(props.location.search);

  if (queryString.has('q')) {
    const searchParam = queryString.get('q');
    todoList = todoList.filter(todo => todo.title === searchParam);
  } else {
    if(selectedDate) {
      todoList =todoList.filter(todo => todo.date === selectedDate);
    }
  }

  function addTodo(formData) {
    const newTodo = {
      id: Date.now(),
      complete: false,
      date: selectedDate,
      title: formData.get('title'),
      description: formData.get('description')
    };
    dispatch(addTodoAction(newTodo));
    setShowModal(false);
  }

  function removeItem(id) {
    dispatch(removeTodoAction(id)) ;
  }

  function completeItem(id) {
    dispatch(completeTodoAction(id)) ;
  }
  
  function goHomePage() {
    props.history.push('/');
  }
 

  return (
    <React.Fragment>
      <HeaderComponent todoList={todoList}/>
      <section className="content">
        <header className="content-header">
          <div className="content-title">
             {`to do list du to ${new Date(selectedDate).toLocaleDateString()}`}
          </div>
          <div className="tool-bar">
            <Button label="Add a new todo list" onClick={() => {setShowModal(true)}} />
          </div>
        </header>
        {
          !todoList.length ? <div>{`There are no todos for ${selectedDate} date`}</div> :
          <TableComponent data={todoList} removeItem={removeItem} completeItem={completeItem}/>
        }
        <div className="btn-group-justify">
         <Button theme="success" label="Go to Home Page" onClick={goHomePage} />
        </div>
      </section>
      <ModalComponent show={showModal} title="modal title" onSubmit={addTodo} onClose={() => {setShowModal(false)}}/>
    </React.Fragment>

  );
}

export default DatePageComponent;