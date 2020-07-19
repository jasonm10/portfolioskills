import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div style={{ paddingBottom: '20px' }}>
            <input
                className='pa3'
                type="search"
                placeholder="Search for skills..."
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;