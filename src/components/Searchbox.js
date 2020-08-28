import React from 'react';

const Searchbox = ({ searchfeild, searchChange }) => {

    return (
        <div className='pa2 tc'>
        <input className='pa3 ba b--white bg-white tc br-pill'
        type ='search' 
        placeholder='Search robofriends'
        onChange={searchChange}/>
        </div>
    );
}

export default Searchbox;
