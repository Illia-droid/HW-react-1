import React, { useEffect, useReducer } from "react";

const store = 2;

const reducer = (state, action) => {
  return state;
};

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
  });
  useEffect(() => {
    fetch("./data/chat.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "loaded",
        })
      )
      .catch((err) =>
        dispatch({
          type: "error",
        })
      );
  }, []);
  return (
    <section>
      <h2>CHat</h2>
    </section>
  );
};

export default Chat;
