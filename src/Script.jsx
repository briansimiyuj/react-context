import BookList from "./components/BookList"
import Navbar from "./components/Navbar"
import ThemeToggle from "./components/ThemeToggle"
import AuthContextProvider from "./context/AuthContext"
import BookContextProvider from "./context/BookContext"
import ThemeContextProvider from "./context/ThemeContext"

function Script(){
  
  return(
    
    <main>

      <ThemeContextProvider>

        <AuthContextProvider>

          <Navbar/>

          <BookContextProvider>

            <BookList/>

          </BookContextProvider>

          <ThemeToggle/>

        </AuthContextProvider>

      </ThemeContextProvider>

    </main>

  )

}

export default Script
