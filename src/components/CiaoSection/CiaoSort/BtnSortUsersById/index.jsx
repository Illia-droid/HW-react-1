import React from 'react';

const BtnSortUsersById = (props) => {
    const {isSortIdUp,sortUsersById} = props
    return (
        <button onClick={sortUsersById}>
          sort by id {isSortIdUp ? "up" : "down"}
        </button>
    );
}

export default BtnSortUsersById;
