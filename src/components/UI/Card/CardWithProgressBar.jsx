import React, { Component } from 'react'

class CardWithProgressBar extends Component {

    state = {
        title : "",
        value : "",
        icon : "",
        textType : "primary",
        percent: "0%"
    }

    componentStyle = {
      width: this.props.percent
    };
    

    render() {
        return <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className={"text-xs font-weight-bold " + this.props.textType + " text-uppercase mb-1"} >{this.props.title}</div>
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{this.props.value}</div>
                          </div>
                          <div className="col">
                            <div className="progress progress-sm mr-2">
                              <div className="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={this.componentStyle} ></div>
                            </div>
                          </div>
                        </div>
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

export default CardWithProgressBar;