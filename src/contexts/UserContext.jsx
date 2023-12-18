import { createContext } from "react";

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    return <UserContext.Provider value={{ username: "nav"}}>
        { children }
    </UserContext.Provider>
}