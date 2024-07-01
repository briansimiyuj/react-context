import BookList from "./components/BookList"
import Navbar from "./components/Navbar"
import ThemeContextProvider from "./context/ThemeContext"

function Script(){
  
  return(
    
    <main>

      <ThemeContextProvider>

        <Navbar/>

        <BookList/>

      </ThemeContextProvider>

    </main>

  )

}

export default Script
