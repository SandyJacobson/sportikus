import React from 'react'
import './Search.css'

const Search = (props) => {
    return (
        <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
            <input
                className="search-input"
                value={props.value}
                onChange={(e) => props.onChange(e)}
                name="Search"
                placeholder="Search"
                type="text"
                autoFocus
            />
        </form>
    )
}

export default Search