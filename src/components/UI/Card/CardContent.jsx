import React, { Component } from 'react';

export default class CardContent extends Component {

    render() {
        return  <div className="card-body">
                    {this.props.children}
                </div>;
    }
}
