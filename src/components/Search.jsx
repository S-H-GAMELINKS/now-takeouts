import React from 'react';
import { isPointWithinRadius } from 'geolib';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';

// import Place component
import Place from './Place.jsx';

// import Place data
import places from '../data/places.json';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            places: places,
            distance: 1
        }
        this.checkDistance = this.checkDistance.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    checkDistance(location, data) {
        let result = isPointWithinRadius(location, data, this.state.distance * 1000);
        return result;
    }

    getCurrentLocation() {
        window.navigator.geolocation.getCurrentPosition(
            success => this.setState({ latitude: success.coords.latitude, longitude: success.coords.longitude, locationable: true }),
            error => alert("位置情報が許可されていません!\n位置情報を許可してから「店舗を探す」をクリックしてください!")
        );
    }

    componentDidMount() {
        this.getCurrentLocation()
    }

    handleClick() {
        this.getCurrentLocation()
        this.checkDistance.bind(this)
        console.log(this.state)
    }

    handleChange(event) {
        this.setState({ distance: event.target.value });
    }

    render() {
        let placeData = this.state.places;
        let result = false;

        return (
            <Container>
                <div className="d-flex justify-content-center">
                    <Form.Group>
                        <Form.Control as="select" value={this.state.distance} onChange={this.handleChange} >
                            <option value='1'>周辺半径1km</option>
                            <option value='2'>周辺半径2km</option>
                            <option value='3'>周辺半径3km</option>
                            <option value='4'>周辺半径4km</option>
                            <option value='5'>周辺半径5km</option>
                            <option value='6'>周辺半径6km</option>
                            <option value='7'>周辺半径7km</option>
                            <option value='8'>周辺半径8km</option>
                            <option value='9'>周辺半径9km</option>
                            <option value='10'>周辺半径10km</option>
                        </Form.Control>
                    </Form.Group>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="success" onClick={this.handleClick}>店舗を探す</Button>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <Button variant="primary">最寄りのお店一覧</Button>
                </div>
                <Row className="mt-5">
                    {placeData.map((data, i) => {
                        result = this.checkDistance(this.state, { latitude: data.location.latitude, longitude: data.location.longitude });
                        if (result) {
                            return (
                                <Col sm={12} md={4} lg={4} className="mt-2" key={i}>
                                    <Place info={data} />
                                </Col>
                            );
                        } else {
                            return null;
                        }
                    })}
                </Row>
            </Container>
        );
    }
}

export default Search;