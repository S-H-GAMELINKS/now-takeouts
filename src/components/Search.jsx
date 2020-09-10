import React from 'react';
import { isPointWithinRadius } from 'geolib';
import { Row, Col, Container, Button } from 'react-bootstrap';

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
            places: places
        }
        this.checkDistance = this.checkDistance.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    checkDistance(location, data) {
        let result = isPointWithinRadius(location, data, 1000);
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

    render() {
        let placeData = this.state.places;
        let result = false;

        return (
            <Container>
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