import React, { Component } from 'react'

class InputSearch extends Component {

    state = {
        placeholder : "",
        label : "",
        buttonType : "primary"
    }

    componentStyle = {
        marginTop: "-2px"
    };

    render() {
        return <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder={this.props.placeholder} aria-label={this.props.label} aria-describedby="basic-addon2"  />
                  <div className="input-group-append">
                    <button className={"btn btn-" + this.props.buttonType} type="button" style={this.componentStyle}>
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
    }
}

export default InputSearch;