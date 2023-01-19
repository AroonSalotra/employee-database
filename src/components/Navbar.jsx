import { Link } from "react-router-dom";

const Navbar = () => {

    const navList = [
        { redirect: "/", body: "Home" },
        { redirect: "/manager", body: "Manager" },
        { redirect: "/services", body: "Services" },
    ]

    return (
        <nav>
            <ul className="flex justify-center gap-8 bg-white mb-8">

                {navList.map(({ redirect, body }) => {
                    return <li key={body}>
                        <Link to={redirect}>{body}</Link>
                    </li>
                })}

            </ul>
        </nav>
    );
}

export default Navbar;