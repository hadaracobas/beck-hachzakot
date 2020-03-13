import React from 'react';
import './index.css';



class Menu extends React.Component {

    render() {
        return(
            
            <div className="menu-container clearfix">
                <div>
                    <a href="#" className="logo">בק אחזקות</a>
                </div>

                <div>
                    <input type="checkbox" className="menu-input-check" id="menu-input-check" />
                    <label htmlFor="menu-input-check" className="menu-label-check"><span className="hamburger-icon"></span></label>
                    
                    <ul className="menu"> 
                        <li><a href="#">בית</a></li>
                        <li><a href="#">אודות</a></li>
                        <li className=""><a href="#">שירותים</a></li>
                        <li><a href="#">צור קשר</a></li>
                    </ul>
                    
                </div>
                
            </div>
        );
    }
}

export default Menu;