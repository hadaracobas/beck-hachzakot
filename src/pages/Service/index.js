import React from 'react';
import './index.css';

// Imports Components
import PageTop from '../../components/PageTop';
import FaqSection from '../../components/FaqSection';


class Service extends React.Component {


    render() {
        
        return(
            <div className="service-container clearfix">
                <PageTop pageTopTitle="שירות" />

                <div className="service-sidebar-container">
                    <ul className="services-menu">
                        <li><a href="#">{this.props.serviceNameMenu1}</a><i className="fas fa-angle-left"></i></li>
                        <li><a href="#">{this.props.serviceNameMenu2}</a><i className="fas fa-angle-left"></i></li>
                        <li><a href="#">{this.props.serviceNameMenu3}</a><i className="fas fa-angle-left"></i></li>
                        <li><a href="#">{this.props.serviceNameMenu4}</a><i className="fas fa-angle-left"></i></li>
                        <li><a href="#">{this.props.serviceNameMenu5}</a><i className="fas fa-angle-left"></i></li>
                        <li><a href="#">{this.props.serviceNameMenu6}</a><i className="fas fa-angle-left"></i></li>
                    </ul>

                    <div className="service-cta-container">
                    <i className="far fa-file-pdf"></i>
                        <h4>הורד פירוט שירות PDF</h4>
                        <p>לעולם לא יכיל טקסטים חוזרים</p>
                        <a href={this.props.pdfLink}>הורדה</a>
                    </div>
                </div>{/* end service-sidebar */}
                <div className="service-right-side-container">
                    <div className="service-images-container">
                    <img src={this.props.image1} className="img-fluid" alt="Service image" />
                    <img src={this.props.image2} className="img-fluid" alt="Service image" />
                    </div>

                    <div className="service-overview-container">
                    <h2>סקירת שירות</h2>
                    <p>{this.props.serviceOverviewText}</p>
                    </div>

                    <div className="service-prices-container">
                    <h2> טווחי מחירים</h2>
                    <ul>
                        <li>{this.props.price1}</li>
                         <li>{this.props.price2}</li>
                         <li>{this.props.price3}</li>
                         <li>{this.props.price4}</li>
                    </ul>
                    </div>

                    <div className="service-faq-container">
                        <FaqSection
                        mainTitle="שאלות ותשובות"
                        q1={this.props.q1}
                        a1={this.props.a1}
                        q2={this.props.q2}
                        a2={this.props.a2}
                        q3={this.props.q3}
                        a3={this.props.a3}
                        q4={this.props.q4}
                        a4={this.props.a4}
                        />
                    </div>
                </div>{/* end service-right-side-container */}


                

                
                

            </div>
        );
    }
}


export default Service;