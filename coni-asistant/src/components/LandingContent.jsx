import { Link } from "react-router-dom";

const LandingContent = () => {
    return (
        <div className="main py-16 my-20 flex flex-col items-center">

            <div className="page-container">
                <div className="present">
                <h1 className='logo'><span className='text-7xl font-bold text-transparent bg-gradient-to-r from-white to-gray-600 bg-clip-text'>CON</span><span className="IA text-7xl font-bold text-transparent bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text">IA</span></h1>

                    <p className="introducction w-96 m-20">
                        Is a IA powered asistant that provides you tools to improve your productivity, 
                        healthness and finances
                    </p>
                    <Link to= "asistant"><button   className='Login hover:bg-orange-600 transition duration-300 ease-in-out rounded-md py-2 px-4'>Enter</button></Link>

                </div>
                
            </div>
        </div>
    )
}

export default LandingContent;