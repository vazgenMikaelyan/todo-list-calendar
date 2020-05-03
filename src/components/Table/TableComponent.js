import React from 'react';
import { func, array } from 'prop-types'

import Button from '../Form/Button';

import "./TableComponent.css"

function TableComponent(props) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Todo item</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((todo, i) => {
                    return (
                        <tr key={`id-${todo.id}`} >
                            <td>
                                <strong>{todo.title}</strong>
                                <p>{todo.description}</p>
                            </td>
                            <td>
                                {todo.complete ? "Complete" : "Incomplete"}
                            </td>
                            <td> 
                                <div className="btn-group">
                                    <Button label="Remove" theme="delete" size="small" onClick={() => props.removeItem(todo.id)} />
                                    {
                                        !todo.complete ?
                                            <Button label="Mark as done" theme="success" size="small" onClick={() => props.completeItem(todo.id)} /> : ''
                                    }
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

TableComponent.propTypes = {
    data: array.isRequired,
    removeItem: func.isRequired,
    completeItem: func.isRequired,
}

export default TableComponent;