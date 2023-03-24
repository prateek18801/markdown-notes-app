import { Form, Row, Col, Button, Stack } from 'react-bootstrap';
import CreateableReactSelect from 'react-select/creatable';

const NoteForm = () => {
    return (
        <Form>
            <Stack gap={3}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <CreateableReactSelect isMulti />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control as='textarea' rows={15} required />
                </Form.Group>
                <Stack direction='horizontal' gap={2} className='justify-content-end'>
                    <Button variant='success' type='submit'>Save</Button>
                    <Button variant='danger' type='button'>Clear</Button>
                </Stack>
            </Stack>
        </Form>
    );
}

export default NoteForm;
