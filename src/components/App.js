import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import {Router} from 'react-router-dom';
import history from "../routing/History";
import NavBar from "./core/NavBar";
import RouteSwitch from "../routing/Switch";

function App() {
    return (
        <Router history={history}>
            <NavBar/>
            <RouteSwitch/>
        </Router>
    );
}

export default App;
