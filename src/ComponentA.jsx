import ComponentB from "./ComponentB";
import React, {useState, createContext} from 'react';

export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("phoebe");

    return (
        <UserContext.Provider value={user}>
            <div className="box">
                <h1>Component A</h1>
                <h2>hello, {user}</h2>
                <ComponentB user={user} />
            </div>
        </UserContext.Provider>
    );
}

export default ComponentA;