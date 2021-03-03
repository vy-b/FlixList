import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";

class ReviewTab extends React.Component{
    render(){
        const {title, poster, year,plot,rated,runtime,genre,actors} = this.props;
        return(
            <div className = "App">
                <header className = "App-header">
                    <div>
                        <div>
                            <h1>{title}</h1>
                            <h5>{year}|{rated}</h5>
                            <p>{plot}</p>
                            <p>Cast:{actors}</p>
                            <p>Runtime:{runtime}</p>
                            <p>{genre}</p>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default withRouter(ReviewTab)