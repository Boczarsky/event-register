import React, { Component } from 'react';
import { getToday } from '../utils';
import { connect } from 'react-redux';
import { register } from '../actions/registration-actions';

class EventRegistrationForm extends Component {
    register = (event) => {
        event.preventDefault();
        const form = document.forms['registration'];
        const data = {
            firstName: form['firstName'].value,
            lastName: form['lastName'].value,
            email: form['email'].value,
            eventDate: new Date(form['eventDate'].value)
        }
        this.props.register(data);
    }
    render() {
        return(
            <div className="registration-form">
                <form id="registration" onSubmit={this.register}>
                    <label htmlFor="eventDate">* First name:</label>
                    <input type="text" id="firstName" required placeholder="Jane" />
                    <label htmlFor="eventDate">* Last name:</label>
                    <input type="text" id="lastName" required placeholder="Doe" />
                    <label htmlFor="eventDate">* Email:</label>
                    <input type="email" id="email" required placeholder="jane@doe.com" />
                    <label htmlFor="eventDate">* Event date:</label>
                    <input type="date" id="eventDate" required min={getToday()} />
                    <button>REGISTER</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.registration
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (data) => dispatch(register(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventRegistrationForm);