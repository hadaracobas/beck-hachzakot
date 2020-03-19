import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';



class Menu extends React.Component {

    render() {
        return(
            
            <div className="menu-container clearfix">
                 <div>
                    {/* <a href="#" className="logo">בק אחזקות</a> */} <img src="/img/logo2.jpg" className="logo" />
                </div> 
                {/* <div className="logo-container">
                    <img src="/img/logo.jpg" alt="logo" />
                </div> */}

                <div>
                    <input type="checkbox" className="menu-input-check" id="menu-input-check" />
                    <label htmlFor="menu-input-check" className="menu-label-check"><span className="hamburger-icon"></span></label>
                    
                    <ul className="menu"> 
                    <Link to="/">
                        <li>בית</li>
                    </Link>  

                    <Link to="/about">
                        <li>אודות</li>
                    </Link>

                    <Link to="/services">
                        <li>שירותים</li>
                    </Link>

                    <Link to="/contact">
                        <li>צור קשר</li>
                    </Link>
                    </ul>
                    
                </div>
                
            </div>
        );
    }
}

export default Menu;