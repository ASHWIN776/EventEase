import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.config';
import { doc, getDoc, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router';

function NavScrollExample() {
  let navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = () => {
    auth.signOut();
    navigate("/");  
  }
  const getType = async () => {
    const q = query(collection(db, "profile"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot[0].data().role;

  }
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">EventEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex justify-content-between"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
          </Nav>
          {user && <Button className='mx-2' onClick={() => navigate('/add-event-form')} variant="outline-primary">Create an Event</Button>}
          <Form className="d-flex">

            {user &&  <Button onClick={logout} variant="outline-danger">Logout</Button>}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;