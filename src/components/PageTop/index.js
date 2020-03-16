import React from 'react';
import './index.css';

class PageTop extends React.Component {

    render() {
        return(
            <div className="page-top-container">
                <h3>{this.props.pageTopTitle}</h3>
            </div>
        );
    }
}


export default PageTop;