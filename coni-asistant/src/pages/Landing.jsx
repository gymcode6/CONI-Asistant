import LandingContent from '../components/LandingContent';
import { motion } from "framer-motion"
//import Logo from '../components/Logo';
const Landing = () => {
    
    return (

        <div className='main'>

                <motion.div 
                initial={{ opacity: 0}} 
                animate={{ opacity: 1}}
                transition={{ duration: 1.5, ease: 'easeOut' }} 
                exit={{ opacity: 0}} 
                style={{ width: "100%", textAlign: "center" }}
                >
                    <LandingContent /> 
                </motion.div>
            

        </div>
    )
}
export default Landing;