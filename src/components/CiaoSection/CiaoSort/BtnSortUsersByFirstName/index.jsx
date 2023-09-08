import React from 'react';

const BtnSortUsersByFirstName = (props) => {
    const {sortUsersByFirstName, isSortFirstNameUp } = props;
    return (
        <button onClick={sortUsersByFirstName}>
          sort by firstName {isSortFirstNameUp ? "up" : "down"}
        </button>
    );
}

export default BtnSortUsersByFirstName;
