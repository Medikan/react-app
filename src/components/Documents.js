import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

var Documents = React.createClass({
    render: function() {
        return (
            <div>
                <PageHeader>Documents <small>Get help from others</small></PageHeader>
                <Grid>
                    <Row>
                        <Col xs={2} md={1}>
                        </Col>
                        <Col xs={14} md={10}>
                            <Jumbotron>
                                <h1>Oh No!</h1>
                                <p>It looks like there's nothing here! Check back later</p>
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

export default Documents;