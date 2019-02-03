import React, { Component } from 'react';
import EventRegistrationForm from './event-registration-form';
import { connect } from 'react-redux';
import { registrationSuccessful, registrationFailed, showPopup } from '../actions/registration-actions';
import Popup from '../components/popup';
import axios from 'axios';

class EventRegistration extends Component {
    async componentDidUpdate() {
        if(this.props.registration.status === 'PENDING') {
            const {firstName, lastName, email, eventDate} = this.props.registration;
            const body = {
                firstName,
                lastName,
                email,
                eventDate
            }
            try {
                await axios.post('http://localhost:3000/registrations', body);
                this.props.registrationSuccessful();
                this.props.showPopup('You have been successfully registered for an event!');
            } catch {
                this.props.registrationFailed();
                this.props.showPopup('Register failed. Please try again later.')
            }
        }
    }
    render() {
        return (
            <>
                <EventRegistrationForm />
                <Popup />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registration: state.registration
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registrationSuccessful: () => dispatch(registrationSuccessful()),
        registrationFailed: () => dispatch(registrationFailed()),
        showPopup: (message) => dispatch(showPopup(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventRegistration);