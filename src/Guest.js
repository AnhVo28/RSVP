import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';


const Guest = props => {
  let html = props.isEditing?
    <input
      type="text"
      onChange={e => props.setName(e.target.value)}
      value={props.name}/>
    :
    <span>{props.name}</span>

      // <GuestName
      //   isEditing ={props.isEditing}
      //   handleNameEdit = {e => props.setName(e.target.value)}
      //   >{props.name}</GuestName>
  return (
    <li>
      {html}

      <label>
        <input
          type="checkbox"
          checked={props.isConfirmed}
          onChange={props.handleConfirmation}
          /> Confirmed
      </label>
      <button onClick={props.handleEdit}>
        {props.isEditing? "Save" : "Edit"}
      </button>
      <button onClick={props.handleRemove}>remove</button>
    </li>
  )
}



Guest.PropTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
}

export default Guest;
