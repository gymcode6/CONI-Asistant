import { motion } from "framer-motion"
import {useState} from 'react'

const Login = ( ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Aquí puedes implementar la lógica de autenticación
      console.log('Email:', email, 'Password:', password);
      // Por ejemplo, puedes enviar estos datos a un servidor para la autenticación
    };
  
    return (
        <motion.div 
        initial={{ opacity: 0}} 
        animate={{ opacity: 1}}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        exit={{ opacity: 0}} 
        style={{ width: "100%", textAlign: "center" }}
        className=" my-20"
        >
            <div className="main flex flex-col gap-y-5 justify-center items-center">

            <div className="login-container flex flex-col gap-y-5 bg-gray-800 backdrop-blur-lg w-3/4 p-10 m-10 rounded-xl">
                <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
                <form onSubmit={handleLogin} className="  flex flex-col items-center gap-y-5">
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-10 w-2/3 rounded-md text-center bg-gray-700 placeholder-gray-200"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-10 w-2/3 rounded-md text-center bg-gray-700 placeholder-gray-200"
                    />
                    <button type="submit" className=" h-14 w-1/3 bg-gradient-to-r from-red-600 to-orange-500 ">Iniciar Sesión</button>
                </form>
                </div>
                            

            </div>
        </motion.div>
    )
}

export default Login;