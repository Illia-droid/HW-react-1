import React from 'react';

const BtnSortUsersByLastName = (props) => {
    
    const {sortUsersByLastName, isSortLastNameUp } = props;
    return (
        <button onClick={sortUsersByLastName}>
          sort by lastName {isSortLastNameUp ? "up" : "down"}
        </button>
    );
}

export default BtnSortUsersByLastName;
