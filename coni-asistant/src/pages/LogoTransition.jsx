import { useState, useEffect } from "react";
import Logo from "../components/Logo";
const LogoTransition = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div>
        
          <div>
            {isVisible && (
                <div className="logo-container">
                    <Logo/>
                </div>
            )}
          </div>
        
      </div>
    );
  };

export default LogoTransition;