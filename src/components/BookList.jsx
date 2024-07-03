import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { BookContext } from "../context/BookContext"

const BookList = () =>{

    const { isLightTheme, light, dark } = useContext(ThemeContext),
          { books } = useContext(BookContext),  
           theme = isLightTheme ? light : dark

    return(

        <div className="book-list" style={{ backgroundColor: theme.bg, color: theme.syntax }}>

            <ul>

                {
                
                    books.map(book => <li key={book.id} style={{ backgroundColor: theme.ui }}>{book.title}</li>)
                
                }

            </ul>

        </div>      

    )

}

export default BookList