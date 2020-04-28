import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (   
            <Jumbotron>
                <h1>浜田テイクアウトnowへようこそ</h1>
                <p>
                    あなたの現在位置を使い、周辺一キロ以内のテイクアウト対応店舗を一覧で表示してくれるアプリです。
                </p>
            </Jumbotron>
        );
    }
}

export default About;