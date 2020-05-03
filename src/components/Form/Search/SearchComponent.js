import React from 'react';

import './SearchComponent.css'
import { ReactComponent as SearchIcon } from './search-Icon.svg';

function SearchComponent() {

    const handleSubmit = (e) => {
        const formData = new FormData(e.currentTarget);
        if (!formData.get('q')) {
            e.preventDefault();
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