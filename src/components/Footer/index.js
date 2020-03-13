import React from 'react';
import './index.css';

class Footer extends React.Component {

    render() {
        return(
            <footer className="footer">
                <div className="footer-contact-container">
                    <div className="footer-contact-container-content">
                    <i className="fas fa-phone-square"></i>
                        <div className="footer-contact-text">
                            <span>טלפון:</span><br></br>
                            <span>052-896-87-12</span>
                        </div>
                    </div>

                    <div className="footer-contact-container-content">
                    <i className="far fa-map"></i>
                        <div className="footer-contact-text">
                            <span>כתובת:</span><br></br>
                            <span>ולרי טורצ'ינסקי, כפר סבא</span>
                        </div>
                    </div>

                    <div className="footer-contact-container-content">
                    <i className="fas fa-envelope-square"></i>
                        <div className="footer-contact-text">
                            <span>אימייל:</span><br></br>
                            <span>office@backhaz.com</span>
                        </div>
                    </div>
                </div>


                <div className="footer-bottom-wrapper">
                    <div className="footer-about-container">
                        <h3>אודות</h3>
                        <p>יש המון גרסאות זמינות לפסקאות של Lorem Ipsum. אבל רובם עברו שינויים בצורה זו או אחרת, על ידי השתלת הומור או מילים אקראיות שלא נראות אפילו מעט אמינות. אם אתה הולך להשתמש במקטעים של של Lorem Ipsum אתה צריך להיות בטוח שאין משהו מביך חבוי בתוך הטקסט. כל מחוללי הטקסט של</p>
                        <i class="fab fa-facebook-square"></i>
                    </div>

                    <div className="footer-services-container">
                    <h3>השירותים שלנו</h3>
                        <span><i class="fas fa-check"></i> שיפוץ מלא </span><br></br>
                        <span><i class="fas fa-check"></i> עיצוב ובניה </span><br></br>
                        <span><i class="fas fa-check"></i> תיקוני בית </span><br></br>
                        <span><i class="fas fa-check"></i> צביעה  </span><br></br>
                        <span><i class="fas fa-check"></i> שיפוץ אמבטיה </span><br></br>
                        <span><i class="fas fa-check"></i>  נוספים </span><br></br>
                    </div>


                    <div className="footer-midrag-container">
                        <h3>ציון 9.63 באתר מידרג<i className="fab fa-angellist"></i></h3>
                        
                        <a href="https://www.midrag.co.il/SpCard/Sp/15113?sectorId=11" target="_blank">כנס לעמוד</a>
                        
                    </div>

                    <div className="footer-copyright-container">
                        <span>כל הזכויות שמורות - בק אחזקות&copy;</span>
                    </div>

             </div> {/* end bottom wrapper */}
           
              
 
            </footer>
        );
    }
}


export default Footer;