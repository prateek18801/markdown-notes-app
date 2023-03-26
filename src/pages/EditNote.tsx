import { Container } from 'react-bootstrap';
import useNote from '../hooks/useNote';
import NoteForm from '../components/NoteForm';
import { EditNoteProps } from '..';

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
    const note = useNote();

    return (
        <Container className='my-3'>
            <h1>Edit Note</h1>
            <NoteForm onSubmit={data => onSubmit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags} />
        </Container>
    );
}

export default EditNote;
