import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Libaries Imports
import ScrollToTop from 'react-router-scroll-top';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Pages Component Imports
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Switch>
          <ScrollToTop>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" component={Services} />
          <Route path="/service" component={() =>
          <Service 
          serviceNameMenu1="שירות 1"
          serviceNameMenu2="שירות 2"
          serviceNameMenu3="שירות 3"
          serviceNameMenu4="שירות 4"
          serviceNameMenu5="שירות 5"
          serviceNameMenu6="שירות 6"
          pdfLink="#"
          image1="/img/services-images/4.jpg"
          image2="/img/services-images/3.jpg"
          serviceOverviewText="יש המון גרסאות זמינות לפסקאות של Lorem Ipsum. אבל רובם עברו שינויים בצורה זו או אחרת, על ידי השתלת הומור או מילים אקראיות שלא נראות אפילו מעט אמינות. אם אתה הולך להשתמש במקטעים של של Lorem Ipsum אתה צריך להיות בטוח שאין משהו מביך חבוי בתוך הטקסט. כל מחוללי הטקסט של Lorem Ipsum שנמצאים ברשת האינטרנט מכוונים לחזור על טקסטים מוגדרים מראש לפי הנדרש. וזה הופך אותנו למחוללי טקסט אמיתיים ראשונים באינטרנט. אנו משתמשים במילון עם מעל 200 ערכים בלטינית משולבים במבני משפטים על מנת לשוות לטקט מראה הגיוני. ולכן הטקסט של Lorem Ipsum לעולם לא יכיל טקסטים חוזרים, הומור, או מילים לא מאופייניות וכדומה"
          price1='פירוק המבנה הישן:  850 ש"ח למ"ר'
          price2='יסודות חדשים: 680 ש"ח למ"ר'
          price3='צביעה כללית: 890 ש"ח לחדר'
          price4='אינסטלציה כללית באמבטיה: 3400 ש"ח'
          q1="שאלה ראשונה"
          a1='טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט'
          q2="שאלה שניה"
          a2='טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט'
          q3="שאלה שלישית"
          a3='טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט'
          q4="שאלה רביעית"
          a4='טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט'
          />
          } />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          </ScrollToTop>
        </Switch>

        <Footer /> 
        
      </div>
    </Router>
  );
}

export default App;








/*          <Service 
        serviceNameMenu1="שירות 1"
        serviceNameMenu2="שירות 2"
        serviceNameMenu3="שירות 3"
        serviceNameMenu4="שירות 4"
        serviceNameMenu5="שירות 5"
        serviceNameMenu6="שירות 6"
        pdfLink="#"
        image1="/img/services-images/4.jpg"
        image2="/img/services-images/3.jpg"
        serviceOverviewText="יש המון גרסאות זמינות לפסקאות של Lorem Ipsum. אבל רובם עברו שינויים בצורה זו או אחרת, על ידי השתלת הומור או מילים אקראיות שלא נראות אפילו מעט אמינות. אם אתה הולך להשתמש במקטעים של של Lorem Ipsum אתה צריך להיות בטוח שאין משהו מביך חבוי בתוך הטקסט. כל מחוללי הטקסט של Lorem Ipsum שנמצאים ברשת האינטרנט מכוונים לחזור על טקסטים מוגדרים מראש לפי הנדרש. וזה הופך אותנו למחוללי טקסט אמיתיים ראשונים באינטרנט. אנו משתמשים במילון עם מעל 200 ערכים בלטינית משולבים במבני משפטים על מנת לשוות לטקט מראה הגיוני. ולכן הטקסט של Lorem Ipsum לעולם לא יכיל טקסטים חוזרים, הומור, או מילים לא מאופייניות וכדומה"
        price1='פירוק המבנה הישן:  850 ש"ח למ"ר'
        price2='יסודות חדשים: 680 ש"ח למ"ר'
        price3='צביעה כללית: 890 ש"ח לחדר'
        price4='אינסטלציה כללית באמבטיה: 3400 ש"ח'
        q1="שאלה ראשונה"
        a1='טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט'
        q2="שאלה שניה"
        a2='טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט'
        q3="שאלה שלישית"
        a3='טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט'
        q4="שאלה רביעית"
        a4='טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט'
        />     */


