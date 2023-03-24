import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<h1>Notes</h1>} />
            <Route path='/note' element={<h1>New Note</h1>} />
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
