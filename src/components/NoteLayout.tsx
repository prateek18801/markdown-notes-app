import { Navigate, Outlet, useParams } from "react-router-dom";
import { NoteLayoutProps } from "..";

const NoteLayout = ({ notes }: NoteLayoutProps) => {
    const { id } = useParams();
    const note = notes.find(note => note.id === id);
    if (note) return <Outlet context={note} />
    return <Navigate to='/' replace />
}

export default NoteLayout;
