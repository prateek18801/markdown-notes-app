import { useOutletContext } from "react-router-dom"
import { Note } from "..";

const useNote = () => {
    return useOutletContext<Note>();
}

export default useNote;
