import './note.css';


export const Note = (props)=> {
    return(
        <div className="note_box">
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
        
        </div>
        
    )
}
