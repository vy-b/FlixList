import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './SignUp/SignUp.css'
class SearchView extends React.Component {
    state= {
        title: ''
    }
    onSubmit = () => {
        const {title} = this.state;
        this.props.onRequest(title)
        this.setState({title: ''})
    }
    onInput = (event) => {
        event.preventDefault();
        const title = event.target.value;
        this.setState({title});
    }
    render() {
        const {title} = this.state;
        const {error} = this.props
        return (
            <div className="search">
                <div class="input-group mb-3">
                    <input className="form-control search-box" type="text" onChange={this.onInput} value={title}/>
                    <div class="input-group-append"><button type="submit" class="btn btn-secondary" onClick={this.onSubmit} value="Search">Search </button></div>
                </div>
                <div className="error">{error}</div>
            </div>
        )
    }
}
export default SearchView;
