const Navbar = ({ textColor }) =>{

    return(

        <nav>

            <h1 style={{ color: textColor }}>Context App</h1>
            
            
            <ul>

                <li>Home</li>
                <li>About</li> 
                <li>Contact</li>

            </ul>

        </nav>

    )

}

export default Navbar