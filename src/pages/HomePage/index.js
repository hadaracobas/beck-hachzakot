import React from 'react';
import './index.css';

// import imeages





class HomePage extends React.Component {


    render() {
  
        return(
            <main className="home-container">

                <div className="header-top-image">
                    <img src="/img/cover.jpg" className="img-fluid" alt="Responsive image"></img>
                    <div className="header-top-image-box-layer">
                        <a href="#">נשמח לקחת את הבית שלך לשלב הבא</a> 
                        <p>יש לנו שנים של ניסיון בשיפוץ ובניית בתים. סוגים שונים של שירותים ברמה הגבוהה ביותר.
    יש לנו שנים של ניסיון בשיפוץ ובניית בתים. סוגים שונים של שירותים ברמה הגבוהה ביותר.</p>
                    </div>
                </div>

                <div className="home-cta-container">
                    <div className="home-cta-text">
                         <span className="home-cta-icon-wrapper"><i className="fas fa-search-dollar"></i></span>
                         <div className="home-cta-text-child">
                            <h6>עלה את שווי הנכס</h6>
                            <p>שיפוץ יעיל יכול להעלות את שווי הנכס שלך. תן לנו לבדוק עד כמה..</p>
                         </div>
                    </div>
                    <div>
                      <a href="#">קבל הצעת מחיר</a>
                    </div>
                </div>

                <div className="home-services-container">
                    <h2>שירותים</h2>
                    <p className="home-services-sub-title">בניגוד לטענה הרווחת, Lorem Ipsum אינו סתם טקסט רנדומלי. יש לו שורשים וחלקים מתוך הספרות הלטינית הקלאסית מאז 45 לפני הספירה. מה שהופך אותו לעתיק מעל 2000 שנה. </p>
                <div class="card-group">
                    <div className="card">
                        <img className="card-img-top" src="/img/services-images/1.jpg" alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">תכנון ובניה</h5>
                        <p className="card-text">שנמצאים ברשת האינטרנט מכוונים לחזור על טקסטים מוגדרים מראש לפי הנדרש. וזה הופך אותנו למחוללי טקסט אמיתיים ראשונים באינטרנט. אנו משתמשים במילון עם מעל 200 ערכים בלטינית משולבים במבני משפטים על מנת לשוות לטקט מראה הגיוני. ולכן הטקסט של Lorem Ipsum לעולם לא יכיל טקסטים חוזרים, הומור, או מילים לא מאופייניות וכדומה</p>
                    </div>
    
                    </div>
                    <div className="card">
                         <img className="card-img-top" src="/img/services-images/4.jpg" alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">שיפוץ כללי</h5>
                        <p className="card-text">שנמצאים ברשת האינטרנט מכוונים לחזור על טקסטים מוגדרים מראש לפי הנדרש. וזה הופך אותנו למחוללי טקסט אמיתיים ראשונים באינטרנט. אנו משתמשים במילון עם מעל 200 ערכים בלטינית משולבים במבני משפטים על מנת לשוות לטקט מראה הגיוני. ולכן הטקסט של Lorem Ipsum לעולם לא יכיל טקסטים חוזרים, הומור, או מילים לא מאופייניות וכדומה</p>
                    </div>
         
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="/img/services-images/3.jpg" alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">תחזוקה</h5>
                        <p className="card-text">שנמצאים ברשת האינטרנט מכוונים לחזור על טקסטים מוגדרים מראש לפי הנדרש. וזה הופך אותנו למחוללי טקסט אמיתיים ראשונים באינטרנט. אנו משתמשים במילון עם מעל 200 ערכים בלטינית משולבים במבני משפטים על מנת לשוות לטקט מראה הגיוני. ולכן הטקסט של Lorem Ipsum לעולם לא יכיל טקסטים חוזרים, הומור, או מילים לא מאופייניות וכדומה</p>
                       </div>
   
                    </div>
                    </div>
                    <a href="#">לכל השירותים</a>
                </div>

                <div className="home-why-us-container">
                <h2>למה לבחור בנו?</h2>
                    <p className="home-why-us-sub-title">בניגוד לטענה הרווחת, Lorem Ipsum אינו סתם טקסט רנדומלי. יש לו שורשים וחלקים מתוך הספרות הלטינית הקלאסית מאז 45 לפני הספירה. מה שהופך אותו לעתיק מעל 2000 שנה. </p>
                <div class="card-group">
                    <div className="card">
                        <i className="far fa-building"></i>
                        <div className="card-body">
                        <h5 className="card-title"> 10 שנות ניסיון</h5>
                        <p className="card-text">שנמצאים ברשת האינטרנט מכוונים לחזור על טקסטים מוגדרים מראש לפי הנדרש. וזה הופך אותנו למחוללי טקסט אמיתיים ראשונים באינטרנט. אנו משתמשים במילון עם מעל 200 ערכים בלטינית משולבים במבני משפטים על מנת לשוות לטקט מראה הגיוני. ולכן הטקסט של Lorem Ipsum לעולם לא יכיל טקסטים חוזרים, הומור, או מילים לא מאופייניות וכדומה</p>
                    </div>
    
                    </div>
                    <div className="card">
                        <i className="fas fa-award"></i>
                        <div className="card-body">
                        <h5 className="card-title"> סטנדרטים מקצועיים</h5>
                        <p className="card-text">שנמצאים ברשת האינטרנט מכוונים לחזור על טקסטים מוגדרים מראש לפי הנדרש. וזה הופך אותנו למחוללי טקסט אמיתיים ראשונים באינטרנט. אנו משתמשים במילון עם מעל 200 ערכים בלטינית משולבים במבני משפטים על מנת לשוות לטקט מראה הגיוני. ולכן הטקסט של Lorem Ipsum לעולם לא יכיל טקסטים חוזרים, הומור, או מילים לא מאופייניות וכדומה</p>
                    </div>
         
                    </div>
                    <div className="card">
                        <i className="fas fa-check-square"></i>
                        <div className="card-body">
                        <h5 className="card-title">איכות עבודה</h5>
                        <p className="card-text">שנמצאים ברשת האינטרנט מכוונים לחזור על טקסטים מוגדרים מראש לפי הנדרש. וזה הופך אותנו למחוללי טקסט אמיתיים ראשונים באינטרנט. אנו משתמשים במילון עם מעל 200 ערכים בלטינית משולבים במבני משפטים על מנת לשוות לטקט מראה הגיוני. ולכן הטקסט של Lorem Ipsum לעולם לא יכיל טקסטים חוזרים, הומור, או מילים לא מאופייניות וכדומה</p>
                    </div>
   
                    </div>
                    </div>
                    <a href="#">צור קשר לייעוץ</a>
                </div>

                <div className="home-testimonials-container">
                    <div className="home-testimonials-cover">
                        <h3>מה אומרים לקוחותינו?</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="costumer-testimonials text-center owl-carousel owl-theme" id="costumer-testimonials">

                                        <div className="testimonial">
                                            <img src="/img/services-images/1.jpg" alt="" className="img-responsive img-circle" />
                                            <blockquote className="text-center">
                                                <p>
                                                הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.
                                                </p>

                                            </blockquote>
                                            <div className="testimonial-author">
                                                <p>
                                                    <strong>יוסי משולם</strong>
                                                    <span>שיפצה אמבטיה</span>
                                                </p>
                                            </div>
                                        </div>




                                        <div className="testimonial">
                                            <img src="/img/services-images/2.jpg" alt="" className="img-responsive img-circle" />
                                            <blockquote className="text-center">
                                                <p>
                                                הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.
                                                </p>

                                            </blockquote>
                                            <div className="testimonial-author">
                                                <p>
                                                    <strong>יוסי משולם</strong>
                                                    <span>שיפצה אמבטיה</span>
                                                </p>
                                            </div>
                                        </div>






                                        <div className="testimonial">
                                            <img src="/img/services-images/3.jpg" alt="" className="img-responsive img-circle" />
                                            <blockquote className="text-center">
                                                <p>
                                                הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.
                                                </p>

                                            </blockquote>
                                            <div className="testimonial-author">
                                                <p>
                                                    <strong>יוסי משולם</strong>
                                                    <span>שיפצה אמבטיה</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>




                <div className="home-before-footer-container">

                </div>

            </main>
        );
    }
}

export default HomePage;