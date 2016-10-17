import React from 'react';

import Home from './Home';
import Documents from './Documents';
import Upload from './Upload';

var Body = React.createClass({
    render: function() {
        switch(this.props.page) {
            case "home": return <Home />;
            case "documents": return <Documents />;
            case "upload": return <Upload />;
        }
    }
});

export default Body;