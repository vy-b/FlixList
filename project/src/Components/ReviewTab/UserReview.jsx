import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import Rating from '@material-ui/lab/Rating'
import './ReviewTab.css'
import Star from "@material-ui/icons/Star";

class UserReview extends React.Component {
    constructor(){
        super()
        this.state = {
            rating:'',
            review:''
        }
        this.changeRating = this.changeRating.bind(this)
        this.changeReview = this.changeReview.bind(this)
    }
    changeRating(event){
        event.preventDefault();
        this.setState({
            rating:event.target.value
        })
    }
    changeReview(event){
        event.preventDefault();
        this.setState({
            review:event.target.value
        })
      }
    onSubmit = (event) => {
        event.preventDefault();
        const userReview = {
            rating: this.state.rating,
            review: this.state.review
        }
        this.props.onReview(userReview);
    }
   render() {
       const {err,success} = this.props;
       return (
        <div className="card user-reviewcard">
            <Form>
                <Form.Group className="user-review-group">
                    <h3>Leave a review</h3>
                    <Rating
                    name="customized"
                    defaultValue={0}
                    emptyIcon={
                        <Star
                          style={{ color: "#111111" }}
                          fontSize="inherit"
                        />
                      }
                    onChange={this.changeRating}
                    />
                    <Form.Control className="review-box" as="textarea" rows={3} placeholder="What did you think about the movie? (Optional)" onChange={this.changeReview}/>
                </Form.Group>
                <Button className="form-control my-button"variant="outline-dark" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
            <div className="error" style={{color:"green"}}> {success}</div>
            {err==="You must log in before leaving a review."
            ? <div className="error">{err} <span> Click <a href="/Login">here</a> to log in.</span></div> 
            : <div className="error">{err}</div> }
        </div>

        
       )
   }
}
export default UserReview;