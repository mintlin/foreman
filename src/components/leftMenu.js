import React from 'react';

const LeftMenu = (props) => {
    const renderCategory = (category) => {
        return (
            <li key={category.id}>
                <div>{category.name}</div>
                <div>{category.categories.map(renderCategory) }</div>
            </li>
        );
    }
    return (
        <div className='NavMenu'>
            <ul>
                {props.categories.map(renderCategory) }
            </ul>
        </div>
    );
};

export default LeftMenu;