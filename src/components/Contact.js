import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import axios from 'axios'

class Contact extends Component {
  state = {
    showContactInfo: false,
  }

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo })
    // If 'showContactInfo' is true then part of the UI is displayed, otherwise hidden (see near bottom of render)
  }

  onDeleteClick = async (id, dispatch) => {
    // DELETE CONTACT
  }

  render() {
    const { id, name, email, phone } = this.props.contact
    const { showContactInfo } = this.state

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            onClick={this.onDeleteClick.bind(this, id)}
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          />
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
        {/* only displayed if 'showContactInfo' is 'true' */}
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
}

export default Contact
