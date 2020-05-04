import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HeaderComponent from '../Header'
import SearchComponent from '../Form/Search'
import CalendarComponent from './Calendar'

import { selectDateAction } from '../../store/actions'

function HomePageComponent(props) {

    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todos);

    function onDaySelect(date) {
        dispatch(selectDateAction(date));
        props.history.push('/todos');
    }

    function onSearch(q) {
        props.history.push(`/todos?q=${q}`);
    }

    return (
        <React.Fragment>
            <HeaderComponent todoList={todoList} />
            <SearchComponent onSearch={onSearch}/>
            <section className="content">
                <CalendarComponent year={2020} month={5} todos={todoList} onDaySelect={onDaySelect} />
            </section>
        </React.Fragment>
    );
}

export default HomePageComponent;
