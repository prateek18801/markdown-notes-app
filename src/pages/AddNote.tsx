import { Container } from 'react-bootstrap';
import NoteForm from '../components/NoteForm';

const AddNote = () => {
    return (
        <Container>
            <h1>Add Note</h1>
            <NoteForm />
        </Container>
    );
}

export default AddNote;
