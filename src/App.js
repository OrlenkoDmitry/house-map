import React, {Component} from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';

import Card from './components/Card';
import TemplateSettings from './components/TemplateSettings';
import './App.scss';

class App extends Component {
    state = {
        properties: [],
        templates: [],
        selected: 0,
    };

    componentDidMount() {
        this.fetchTemplates();
        this.fetchProperties();
    }

    fetchProperties = () => {
        axios.get('http://demo4452328.mockable.io/properties')
            .then((response) => this.setState({properties: response.data.data}))
            .catch((error) => console.log(error))
    };

    fetchTemplates = () => {
        axios.get('http://demo4452328.mockable.io/templates')
            .then((response) => this.setState({templates: response.data}))
            .catch((error) => console.log(error))
    };

    handleChange = (value) => this.setState({selected: Number(value)});

    render() {
        const {properties, selected, templates} = this.state;

        if(properties.length === 0 || templates.length === 0) {
            return null
        }

        return (
            <Container fluid>
                <Row>
                    <Col md={{ size: 6, offset: 3 }} sm="12">
                        <TemplateSettings selected={selected}
                                          templates={templates}
                                          handleChange={this.handleChange}
                        />
                    </Col>
                </Row>
                <Row>
                    {
                        properties.map(property => (
                            <Col key={property.id}
                                 xs="12"
                                 md="6"
                                 lg="4"
                            >
                                <Card img={property.images[0]}
                                      address={property.full_address}
                                      price={property.price}
                                      area={property.area}
                                      type={selected}
                                      templates={templates}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default App;
