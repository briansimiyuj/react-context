import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { AuthContext } from "../context/AuthContext"

const Navbar = () =>{

    const { isLightTheme, light, dark } = useContext(ThemeContext),
          { isAuth, toggleAuth } = useContext(AuthContext),
          theme = isLightTheme ? light : dark

    return(

        <ThemeContext.Consumer>

            {

                context =>{

                    return(

                        <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>

                            <h1>Context App</h1>


                            <div>

                                <button onClick={toggleAuth}>{isAuth ? "Sign Out" : "Sign In"}</button>

                            </div>

                            <ul>

                                <li>Home</li>
                                <li>About</li> 
                                <li>Contact</li>

                            </ul>

                        </nav>

                    )

                }

            }

        </ThemeContext.Consumer>

    )

}

export default Navbar