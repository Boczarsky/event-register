import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hidePopup } from '../actions/registration-actions'

class Popup extends Component {
    timeout = null;
    render() {
        if(this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.timeout = setTimeout(() => this.props.hidePopup(), 5000);
        return (
            this.props.popup.show ? (
                <div id="popup">
                    <p id="message">{this.props.popup.message}</p>
                </div>
                ) : null
        );
    }
}

const mapStateToProps = (state) => {
    return {
        popup: state.popup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hidePopup: () => dispatch(hidePopup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);