import { useState, useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Form, Row, Col, Button, Stack } from 'react-bootstrap';
import CreateableReactSelect from 'react-select/creatable';
import { NoteFormProps, Tag } from '..';

const NoteForm = ({ onSubmit, onAddTag, availableTags, title = '', markdown = '', tags = [] }: NoteFormProps) => {
    const navigate = useNavigate();
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: selectedTags
        });
        navigate('..');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={3}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} defaultValue={title} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <CreateableReactSelect
                                options={availableTags.map(tag => ({ label: tag.label, value: tag.id }))}
                                onCreateOption={label => {
                                    const newTag = { id: uuidv4(), label };
                                    onAddTag(newTag);
                                    setSelectedTags(tags => [...tags, newTag])
                                }}
                                onChange={tags => { setSelectedTags(tags.map(tag => ({ label: tag.label, id: tag.value }))) }}
                                value={selectedTags.map(tag => ({ label: tag.label, value: tag.id }))}
                                isMulti
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control as='textarea' rows={15} ref={markdownRef} defaultValue={markdown} required />
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
