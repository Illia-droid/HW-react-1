import React from 'react';
import CardUsers from '../CardUser';

const CardList = (props) => {
    const {users, setSelectUsers} = props;

    const selectorUser = (id) => {
        const newUsers = users.map((user) => ({
          ...user,
          isSelect: user.id === id ? !user.isSelect : user.isSelect,
        }));
        setSelectUsers(newUsers) 
      };

    const createCard = (user) => <CardUsers key={user.id} user={user} selectUser={selectorUser}/>
    return (
        <section>{users.map(createCard)}</section>
    )
}

export default CardList;
