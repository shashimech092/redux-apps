import NoteContext from "./NoteContext"


const NoteState=({children})=>{
    const state={
        name: 'shashi',
        class: 12
    }
    return(
        <NoteContext.Provider value={state}>
        { children}
        </NoteContext.Provider>
    )
}

export default NoteState