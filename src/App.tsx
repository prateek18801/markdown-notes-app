import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import PageNotFound from './pages/PageNotFound';
import AddNote from './pages/AddNote';
import { NoteData, RawNote, Tag } from '.';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', []);
    const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);

    const notesWithTags = useMemo(() => {
        return notes.map(note => ({ ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }))
    }, [notes, tags]);

    const createNote = ({ tags, ...data }: NoteData) => {
        setNotes(savedNotes => {
            return [...savedNotes, { ...data, id: uuidv4(), tagIds: tags.map(tag => tag.id) }];
        });
    }

    const createTag = (tag: Tag) => {
        setTags(tags => [...tags, tag]);
    }

    return (
        <Routes>
            <Route path='/' element={<h1>Notes</h1>} />
            <Route path='/note' element={<AddNote onSubmit={createNote} onAddTag={createTag} availableTags={tags} />} />
            <Route path='/:id'>
                <Route index element={<h1>note id_</h1>} />
                <Route path='edit' element={<h1>Edit note id_</h1>} />
                <Route path='delete' element={<h1>Delete note id_</h1>} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}

export default App
