import React from 'react';
import './index.css';
import PageTop from '../../components/PageTop';

// Imports Components


class About extends React.Component {

    render() {
        return(
            <div className="about-container">
                <PageTop pageTopTitle="אודות" />

                <div className="about-top-section-container">
                    <div className="about-top-image-wrapper">
                    <img src="/img/services-images/2.jpg" alt="" className="about-top-image" />
                    </div>

                    <div className="about-text-container">
                        <h2> מתכננים, בונים, משפצים</h2>
                        <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
                        <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
                        <a href="#">השירותים שלנו</a>
                    </div>
                </div>


                <div className="about-adv-container">

                    <div className="about-adv">
                    <i className="fab fa-black-tie"></i>
                        <div>
                            <h3> כותרת</h3>
                            <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
                        </div>
                    </div>

                    <div className="about-adv">
                    <i className="fas fa-external-link-square-alt"></i>
                        <div>
                            <h3> כותרת</h3>
                            <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
                        </div>
                    </div>

                    <div className="about-adv">
                    <i className="fas fa-feather-alt"></i>
                        <div>
                            <h3> כותרת</h3>
                            <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
                        </div>
                    </div>
                </div> {/* end about-adv-container */}

                
            </div>
        );
    }
}



export default About;