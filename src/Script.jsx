import { useState } from "react"
import BookList from "./components/BookList"
import Navbar from "./components/Navbar"

function Script(){

  const [bgColor, setBgColor] = useState("red"),
        [textColor, setTextColor] = useState("blue")
  
  return(
    
    <main>

      <Navbar textColor={textColor} bgColor={bgColor}/>

      <BookList bgColor={bgColor}/>

    </main>

  )

}

export default Script
