import React from 'react';
import './index.css';


//Components Imports
import Menu from '../Menu';



class Header extends React.Component {

    render() {
        return(
            
            <header className="header">
                <div className="header-top">

                    <div className="header-top-log-in">
                      <span className="header-login"><i className="fas fa-chart-line"></i> התחבר למערכת</span>
                    </div>

                    <div className="header-top-contact"> 
                        <span className="header-tel"><i className="fas fa-phone-square"></i> 052-897-63-98</span>
                        <span className="header-email"><i className="fas fa-envelope-square"></i> office@backhaz.com</span>
                        <span className="header-social"><i className="fab fa-facebook-square"></i> עקבו אחרינו </span>
                    </div>

                      
                </div> {/* End .header-top */}
                <Menu />
               
            </header>
        );
    }
}

export default Header;