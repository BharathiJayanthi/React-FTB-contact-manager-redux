import axios from 'axios'

import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from './types'

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  })
}

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  )
  dispatch({
    type: GET_CONTACT,
    payload: res.data,
  })
}

export const addContact = contact => async dispatch => {
  // 'res' will include the 'id' provided by jsonplaceholder
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/users',
    contact,
  )
  dispatch({
    type: ADD_CONTACT,
    payload: res.data,
  })
}

export const updateContact = contact => async dispatch => {
  // 'res' will include the 'id' provided by jsonplaceholder
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact,
  )
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data,
  })
}

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  } catch (error) {
    console.log(error)
  }
  //* 'dispatch' not in the 'try' block b/c the delete will error if it's requested on a contact that you created, since it won't be on the database.  Therefore, dispatch will never be called if attempting to delete an added contact
  dispatch({
    type: DELETE_CONTACT,
    payload: id,
  })
}
