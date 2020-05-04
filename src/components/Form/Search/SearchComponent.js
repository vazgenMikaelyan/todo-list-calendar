import React from 'react';

import './SearchComponent.css'
import { ReactComponent as SearchIcon } from './search-Icon.svg';

function SearchComponent(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (formData.get('q')) {
            props.onSearch(formData.get('q'));
        }
    };

    return (
        <form action="/todos" className="search-form" onSubmit={handleSubmit}>
            <input type="text" name="q" placeholder="Search.." />
            <button type="submit">
                <SearchIcon />
            </button>
        </form>
    );
}

export default SearchComponent;