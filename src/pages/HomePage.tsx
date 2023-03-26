import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Container, Row, Stack } from 'react-bootstrap';
import ReactSelect from 'react-select';
import NoteCard from '../components/NoteCard';
import { NoteListProps, Tag } from '..';

const HomePage = ({ availableTags, notes }: NoteListProps) => {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [title, setTitle] = useState<string>('');

    const filteredNotes = useMemo(() => {
        return notes.filter(note => (title === '' || note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())) && (selectedTags.length === 0 || selectedTags.every(tag => note.tags.some(t => t.id === tag.id))));
    }, [title, selectedTags, notes]);

    return (
        <Container className='my-3'>
            <Row className='align-items-center mb-3'>
                <Col><h1>Notes</h1></Col>
                <Col xs='auto'>
                    <Stack gap={2} direction='horizontal'>
                        <Link to='/note'><Button variant='success'>Create</Button></Link>
                        <Button variant='secondary'>Edit Tags</Button>
                    </Stack>
                </Col>
            </Row>
            <Form>
                <Row className='mb-3'>
                    <Col>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control value={title} onChange={e => setTitle(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <ReactSelect
                                options={availableTags.map(tag => ({ label: tag.label, value: tag.id }))}
                                onChange={tags => { setSelectedTags(tags.map(tag => ({ label: tag.label, id: tag.value }))) }}
                                value={selectedTags.map(tag => ({ label: tag.label, value: tag.id }))}
                                isMulti
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Row xs={1} sm={2} lg={3} xl={4} className='g-3'>
                {filteredNotes.map(note => (
                    <Col key={note.id}>
                        <NoteCard id={note.id} title={note.title} tags={note.tags} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomePage;
