import React from "react";
import './Card.css';
import { Component } from "react/cjs/react.production.min";


class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="card">
                <h1>{this.props.title}</h1>
                <img src={this.props.image} />
                <p>{this.props.description}</p>

                </div>
            </div>
        );
    }
}

export default Card;

