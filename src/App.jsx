import React from 'react';

import Navigation from './components/Navigation';
import Body from './components/Body';

var App = React.createClass({
    getInitialState: function() {
        return { page: 'home' };
    },

    changePage: function(newPage) {
        this.setState({
            page: newPage
        });
    },

    render: function() {
        return <div>
                    <Navigation page={this.state.page} changePage={this.changePage} />
                    <Body page={this.state.page} />
                </div>
    }
});

export default App;