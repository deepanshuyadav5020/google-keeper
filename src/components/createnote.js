import datadictionary from "./notesarrays"
import { Note } from "./singlenote"
const CreateNote =() => {
    return(
        datadictionary.map(x =>(<Note title = {x.title} description={x.content} />))    
    );
}
export default CreateNote;