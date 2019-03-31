import React, { Component } from 'react'

class ProgressBar extends Component {

    state = {
        textType : "primary",
        percent: "0%"

    }

    componentStyle = {
        width: (this.props.percent + "%")
    };

    render() {
        return  <div className="progress mb-4">
                    <div className={"progress-bar bg-" + this.props.textType} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={this.componentStyle}></div>
                </div>;
    }
}

export default ProgressBar;