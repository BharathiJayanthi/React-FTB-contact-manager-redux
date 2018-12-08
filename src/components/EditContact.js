import React, { Component } from 'react'
import TextInputGroup from './TextInputGroup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getContact, updateContact } from '../actions/contactActions'
// import uuid from 'uuid'
// import axios from 'axios'

// Overall very similar to AddContact component

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact
    this.setState({
      name,
      email,
      phone,
    })
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getContact(id)
  }

  // Update state when typing in inputs
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  // When submit button is clicked...
  onSubmit = e => {
    e.preventDefault()

    const { name, email, phone } = this.state
    // Check for errors
    let errors = {}
    if (!name) errors.name = 'Name is required'
    if (!email) errors.email = 'Email is required'
    if (!phone) errors.phone = 'Phone number is required'
    this.setState({ errors })

    // If the errors object is empty then update contact
    if (!Object.keys(errors).length) {
      const { id } = this.props.match.params

      const updatedContact = {
        id,
        name,
        email,
        phone,
      }

      // UPDATE CONTACT
      this.props.updateContact(updatedContact)

      // Clear fields in state
      this.setState({
        name: '',
        email: '',
        phone: '',
        errors: {},
      })

      // Redirect back to the home page of contacts
      this.props.history.push('/')
    }
  }

  render() {
    const { name, email, phone, errors } = this.state

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              type="text"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email..."
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              type="text"
              placeholder="Enter Phone Number..."
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Edit Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    )
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  contact: state.contact.contact,
})

export default connect(
  mapStateToProps,
  { getContact, updateContact },
)(EditContact)
