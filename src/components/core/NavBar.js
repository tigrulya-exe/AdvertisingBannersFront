import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavbarLink(props) {
    return (
        <Nav.Link>
            <Link
                style={{ color: 'white'}}
                to={props.to}>
                {props.title}
            </Link>
        </Nav.Link>
    )
}

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Advertising Banners</Navbar.Brand>
            <Nav className="mr-auto">
                <NavbarLink to="/banners" title="Banners"/>
                <NavbarLink to="/categories" title="Categories"/>
            </Nav>
        </Navbar>
    )
}