import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deleteContact } from '../actions/contactActions'

class Contact extends Component {
  state = {
    showContactInfo: false,
  }

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }

  onDeleteClick = id => {
    this.props.deleteContact(id)
  }

  render() {
    const { id, name, email, phone } = this.props.contact
    const { showContactInfo } = this.state

    return (
      <div className="card card-body mb-3">
        <h4>
          {`${name} `}
          {/*//* SHOW DETAILS ARROW */}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          {/*//* DELETE CONTACT */}
          <i
            onClick={() => this.onDeleteClick(id)}
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          />
          {/*//* EDIT CONTACT (navigate to Edit Component) */}
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem',
              }}
            />
          </Link>
        </h4>
        {/*//* Contact details, only displayed if 'showContactInfo' is 'true' (arrow icon clicked) */}
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

export default connect(
  null,
  { deleteContact },
)(Contact)
