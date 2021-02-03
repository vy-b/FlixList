import React from 'react';

class Search extends React.Component {
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
       return (
           <div className="search">
               <input className="search-box" type="text" onChange={this.onInput} value={title}/>
               <input className="button" type="submit" onClick={this.onSubmit} value="Search"/>
           </div>
       )
   }
}
export default Search;