import React from 'react';
import './index.css';

import Faq from 'react-faq-component';


class FaqSection extends React.Component {
 
    render() {
        const data = {
            title: this.props.mainTitle,
            rows: [
              {
                title: this.props.q1,
                content: this.props.a1
              },
              {
                title: this.props.q2,
                content: this.props.a2
              },
              {
                title: this.props.q3,
                content: this.props.a3
              },
              {
                title: this.props.q4,
                content: this.props.a4
              }]
          }
    
          const styles = {
             bgColor: '#F5F5F5',
             titleTextColor: '#444444',
            rowTitleColor: '#444444',
             rowContentColor: '#444444'
          }
        return(
            <div>
                <Faq data={data} styles={styles} />
            </div>
        );
    }
}



export default FaqSection;


