import React, { Component } from 'react'
import TextInputGroup from './TextInputGroup'
// import uuid from 'uuid'
// import axios from 'axios'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault()

    const { name, email, phone } = this.state
    // Check for errors
    let errors = {}
    if (!name) errors.name = 'Name is required'
    if (!email) errors.email = 'Email is required'
    if (!phone) errors.phone = 'Phone number is required'

    this.setState({ errors })
    // The errors object's properties are passed into the TextInputGroup components as props, seen below in render().  They effect the UI within the TextInputGroup component

    // If the errors object is empty then add contact
    if (!Object.keys(errors).length) {
      const newContact = {
        name,
        email,
        phone,
      }

      // SUBMIT CONTACT

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
        <div className="card-header">Add Contact</div>
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
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact
