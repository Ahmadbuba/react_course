import React from "react";

import NewItem from "./components/NewItem/NewItem";

import { useState } from "react";
import ItemForm from "./components/NewItem/ItemForm";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <NewItem onAddUser={addUserHandler} />
      <ItemForm users={usersList} />
    </React.Fragment>
  );
}

export default App;
