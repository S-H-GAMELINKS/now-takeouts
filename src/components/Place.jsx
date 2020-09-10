import React from 'react';
import { Card } from 'react-bootstrap';

class Place extends React.Component {

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.info.name}</Card.Title>
                    <div className="card-body">
                        <div>
                            {this.props.info.info}
                        </div>
                        <div>
                            {this.props.info.address}
                        </div>
                        <div>
                            TEL:{this.props.info.tel}
                        </div>
                    </div>
                    <a href={this.props.info.url} className="btn btn-outline-success" variant="primary" >Webサイトをみる</a>
                </Card.Body>
            </Card>
        );
    }
}

export default Place;