import styles from "../../css/Navbar.module.css"
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavbarLink(props) {
    return (
        <Link
            className={styles.navLink}
            to={props.to}>
            {props.children}
        </Link>
    )
}

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <NavbarLink to="/">
                <Navbar.Brand>
                    Advertising Banners
                </Navbar.Brand>
            </NavbarLink>
            <Nav className="mr-auto">
                <NavbarLink to="/banners">Banners</NavbarLink>
                <NavbarLink to="/categories">Categories</NavbarLink>
            </Nav>
        </Navbar>
    )
}