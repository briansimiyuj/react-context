import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () =>{

    const { isLightTheme, light, dark } = useContext(ThemeContext),
           theme = isLightTheme ? light : dark

    return(

        <ThemeContext.Consumer>

            {

                context =>{

                    return(

                        <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>

                            <h1>Context App</h1>
                            
                            
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