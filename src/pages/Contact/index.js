import React from 'react';
import './index.css';

// Import Components
import PageTop from '../../components/PageTop';

// Import Libaries
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class Contact extends React.Component {

    render() {
        /*
        const style = {
            width: '80%',
            height: '80%'
          }*/
        return(
            <div className="contact-container">
                <PageTop pageTopTitle="צור קשר" />

                    {/*<Map google={this.props.google} zoom={14} style={style}>
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>*/}
                    <div className="google-maps-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.212481790501!2d34.90430568531894!3d32.17154448115902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3835ea10b73f%3A0x9693ee22fe11ff5!2z15DXqNec15XXlteV16jXldeRIDcsINeb16TXqCDXodeR15AsINeZ16nXqNeQ15w!5e0!3m2!1siw!2sat!4v1584464058745!5m2!1siw!2sat" width="100%" height="450" frameborder="0" style={{border: "0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                <div className="contact-form-container">
                    <form className="form">
                        <div>
                            <input className="form-control form-control-lg" type="text" placeholder="שם מלא" name="full-name" />
                            <input className="form-control form-control-lg" type="email" placeholder="אימייל" name="email" />
                            <input className="form-control form-control-lg" type="tel" placeholder="טלפון" name="phone-number" />
                        </div>
                        <div>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="ההודעה שלך"></textarea>
                            <span>נחזור אלייך בהקדם האפשרי, תודה.</span>
                            <input type="submit" value="שלח הודעה" className="contact-form-submit-btn" />
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}


/*export default GoogleApiWrapper({
    apiKey: ("AIzaSyC0_Hpq79B2QJQkDRyy7iUY_sKXZruHhkY")
  })(Contact)*/
  export default Contact;