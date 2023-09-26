import { useState } from "react";

const useAuthUser = (authUser) => {
  const [user, setUser] = useState(authUser);
  const selectUser = (id) => {
    setUser({ ...user, isSelect: !user.isSelect });
  };
  return { user, selectUser };
};

export default useAuthUser;
