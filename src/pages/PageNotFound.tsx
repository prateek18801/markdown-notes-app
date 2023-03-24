import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const PageNotFound = () => {
    return (
        <Container className='d-flex flex-column align-items-center justify-content-center vh-100'>
            <div className='bold' style={{ fontSize: '5em' }}>404</div>
            <h1 className='display-6 mb-4'>Page Not Found</h1>
            <Link to='/'>
                <Button variant='outline-success'>Home</Button>
            </Link>
        </Container>
    );
}

export default PageNotFound;
