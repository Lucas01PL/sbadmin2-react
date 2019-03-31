import React, {Component} from 'react';

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : "",
            actionMenuTitle : "",
            itemsAction : [],
            hideShow : false,
            xlWidth : 0,
            lgWidth : 0,
        }
    }

    toggle = () => {
        this.setState(state => ({ hideShow: !state.hideShow }));
    };

    render() {
        return  <div className={"col-xl-" + this.props.xlWidth + " col-lg-" + this.props.lgWidth}>
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">{this.props.title}</h6>
            <div className={this.state.hideShow ? "dropdown no-arrow show" : "dropdown no-arrow"} >
              <a href="#" className="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggle}>
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div className={this.state.hideShow ? "dropdown-menu dropdown-menu-right shadow animated--fade-in show" : "dropdown-menu dropdown-menu-right shadow animated--fade-in"} aria-labelledby="dropdownMenuLink">
                <div className="dropdown-header">{this.props.actionMenuTitle}</div>
                {
                  this.props.itemsAction.map((item, ind)=> {
                    return <a className="dropdown-item" href={item.link} key={ind}>{item.text}</a>;
                  })
                }
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="chart-area">
              <canvas id="myAreaChart"></canvas>
            </div>
          </div>
        </div>
      </div>
        {/**
        <div classNameName="col-xl-8 col-lg-7">
                    <div classNameName="card shadow mb-4">
                    <div classNameName="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 classNameName="m-0 font-weight-bold text-primary">{this.props.title}</h6>
                        <div classNameName="dropdown no-arrow">
                        <a classNameName="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i classNameName="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div classNameName="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div classNameName="dropdown-header">{this.props.actionMenuTitle}</div>
                            <a classNameName="dropdown-item" href="#">Action</a>
                            <a classNameName="dropdown-item" href="#">Another action</a>
                            <div classNameName="dropdown-divider"></div>
                            <a classNameName="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                    </div>
                    <div classNameName="card-body">
                        <div classNameName="chart-area">
                        <canvas id="myAreaChart"></canvas>
                        </div>
                    </div>
                    </div>
                </div>
            */}
        }

}