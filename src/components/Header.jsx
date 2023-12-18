import { useContext } from "react"
import { UserContext, UserProvider } from "../contexts/UserContext"

const Header = () => {
    const { username } = useContext(UserContext)

    return (
        <div className="Header">
            <h1> I'm a header </h1>
            <p>Hello {username}</p>
        </div>
    )
}

export default Header