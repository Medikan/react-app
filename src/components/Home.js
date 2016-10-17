import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <PageHeader>Home <small>This is your home now</small></PageHeader>
                <Grid>
                    <Row>
                        <Col xs={2} md={1}>
                        </Col>
                        <Col xs={14} md={10}>
                            <Jumbotron>
                                <h1>Welcome to Homework Help</h1>
                                <p>This is a place for students to share knowledge and information about classes that they share</p>
                            </Jumbotron>
                        </Col>
                        <Col xs={2} md={1}>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

export default Home;