var React = require('react');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');

var Navigation = React.createClass({

    render: function() {
        return(
            <div>
                <Navbar fluid inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Homework Help
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav bsStyle="pills" activeKey={this.props.page} onSelect={this.props.changePage}>
                            <NavItem eventKey={'home'} href="#">Home</NavItem>
                            <NavItem eventKey={'documents'} href="#">Documents</NavItem>
                            <NavItem eventKey={'upload'} href="#">Upload</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem href="#">Log In</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
});

export default Navigation; 