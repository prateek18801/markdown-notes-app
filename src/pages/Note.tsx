import { Link } from 'react-router-dom';
import { Badge, Button, Col, Container, Row, Stack } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import useNote from '../hooks/useNote';

const Note = () => {
    const note = useNote();

    return (
        <Container className='my-3'>
            <Row className='align-items-center mb-3'>
                <Col>
                    <h1>{note.title}</h1>
                    <Stack gap={1} direction='horizontal' className='flex-wrap'>
                        {note.tags.map(tag => (
                            <Badge key={tag.id} bg='success' className='text-truncate'>{tag.label}</Badge>
                        ))}
                    </Stack>
                </Col>
                <Col xs='auto'>
                    <Stack gap={2} direction='horizontal'>
                        <Link to={`/${note.id}/edit`}><Button variant='outline-success'>Edit</Button></Link>
                        <Link to={`/${note.id}/delete`}><Button variant='outline-danger'>Delete</Button></Link>
                        <Link to='/'><Button variant='outline-secondary'>Back</Button></Link>
                    </Stack>
                </Col>
            </Row>
            <ReactMarkdown>{note.markdown}</ReactMarkdown>
        </Container>
    );
}

export default Note;
