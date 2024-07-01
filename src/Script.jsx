import BookList from "./components/BookList"
import Navbar from "./components/Navbar"
import ThemeToggle from "./components/ThemeToggle"
import ThemeContextProvider from "./context/ThemeContext"

function Script(){
  
  return(
    
    <main>

      <ThemeContextProvider>

        <Navbar/>

        <BookList/>

        <ThemeToggle/>

      </ThemeContextProvider>

    </main>

  )

}

export default Script
