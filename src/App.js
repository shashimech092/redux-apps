import { useContext } from "react"
import NoteContext from "./context/NoteContext"


const App =()=>{
    const a =useContext(NoteContext)
    return(
        <div>
            Hello {a.name}
        </div>
    )
}

export default App