import Logo from './Logo';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="header fixed top-0 left-0 w-full py-8 flex justify-center items-center ">
            <div className="nav flex justify-around w-1/2 bg-gray-900 rounded-lg items-center py-2 my-2">
                <div className="logo p-0 items-center py-0 my-0">
                    <Logo/>
                </div>
                <div className="sign flex gap-4 items-center">
                    <Link to= "asistant"><button   className='Login hover:bg-orange-600 transition duration-300 ease-in-out rounded-md py-2 px-4'>Log In</button></Link>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;