import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className="flex justify-center gap-8 bg-white mb-8">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/employees"}>Employees</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;