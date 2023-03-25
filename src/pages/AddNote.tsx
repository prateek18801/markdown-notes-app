import { Container } from 'react-bootstrap';
import NoteForm from '../components/NoteForm';
import { AddNoteProps } from '..';

const AddNote = ({ onSubmit, onAddTag, availableTags }: AddNoteProps) => {
    return (
        <Container>
            <h1>Add Note</h1>
            <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
        </Container>
    );
}

export default AddNote;
