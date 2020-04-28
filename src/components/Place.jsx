import React from 'react';
import { Card } from 'react-bootstrap';

class Place extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.info.name}</Card.Title>
                    <Card.Text>
                        <p>
                            {this.props.info.info}
                        </p>
                        <p>
                            {this.props.info.address}
                        </p>
                        <p>
                            TEL:{this.props.info.tel}
                        </p>
                    </Card.Text>
                    <a href="{this.props.info.url}" className="btn btn-outline-success" variant="primary" >Webサイトをみる</a>
                </Card.Body>
            </Card>
        );
    }
}

export default Place;