import React from 'react';
import BrowseTabView from './BrowseTabView'
class BrowseTabController extends React.Component {
    render() {
        return(
            <div>
                <BrowseTabView username={this.props.username}/>
            </div>
        )
    }
}

export default BrowseTabController