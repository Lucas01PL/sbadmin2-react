import React, { Component } from 'react'

class Card extends Component {

    state = {
        title : "",
        value : "",
        icon : "",
        textType : "primary"
    }

    render() {
        return <div className="col-xl-3 col-md-6 mb-4">
                 <div className={"card border-left-" + this.props.textType + " shadow h-100 py-2"}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={"text-xs font-weight-bold text-" + this.props.textType + " text-uppercase mb-1"} >{this.props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.props.value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={this.props.icon}></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>;
    }
}

export default Card;