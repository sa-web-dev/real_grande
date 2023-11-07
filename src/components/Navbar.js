import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
    return ( 
        <div>

        
    <ul className="nav nav-tabs">
        <li className="nav-item">

        
            <a href="#" className="nav-link active" aria-current="page">Active</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Action</a>
            </div>
        </li>
        <li className="nav-item">
            <a href="#" className="nav-link">Another link</a>
        </li>
        <li className="nav-item">
            <a href="#" className="nav-link disabled">Disabled</a>
        </li>
    </ul> 

    </div>
    
    );
}
 
export default Navbar;