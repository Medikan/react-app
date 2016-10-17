import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

var Upload = React.createClass({
    render: function() {
        return (
            <div>
                <PageHeader>Upload <small>Upload helpful documents here</small></PageHeader>
                <Grid>
                    <Row>
                        <Col xs={2} md={1}>
                        </Col>
                        <Col xs={14} md={10}>
                            <Jumbotron>
                                <h1>Want to help others?</h1>
                                <p>Upload your old classwork to give others a push in the right direction</p>
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

export default Upload;