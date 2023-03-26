import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import Note from './pages/Note';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';
import NoteLayout from './components/NoteLayout';
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

    const updateNote = (id: string, {tags, ...data}: NoteData) => {
        setNotes((savedNotes => {
            return savedNotes.map(note => {
                if(note.id === id) return {...note, ...data, tagIds: tags.map(tag => tag.id)};
                return note;
            });
        }));
    }

    const createTag = (tag: Tag) => {
        setTags(tags => [...tags, tag]);
    }

    return (
        <Routes>
            <Route path='/' element={<HomePage availableTags={tags} notes={notesWithTags} />} />
            <Route path='/note' element={<AddNote onSubmit={createNote} onAddTag={createTag} availableTags={tags} />} />
            <Route path='/:id' element={<NoteLayout notes={notesWithTags} />}>
                <Route index element={<Note />} />
                <Route path='edit' element={<EditNote onSubmit={updateNote} onAddTag={createTag} availableTags={tags} />} />
                <Route path='delete' element={<h1>Delete note id_</h1>} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}

export default App
