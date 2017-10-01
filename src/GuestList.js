import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import GuestName from './GuestName';

const GuestList = props => {
    return (
      <ul>
        {props.guests.map((guest, index) =>
          <Guest
            key={index}
            name= {guest.name}
            isConfirmed = {guest.isConfirmed}
            handleConfirmation = {()=>props.toggleConfirmationAt(index)}
            handleEdit = {()=>props.getEdit(index)}
            isEditing = {guest.isEditing}
            setName = {(text) => props.setNameAt(text, index)}
             />)}

      </ul>
    );
}

GuestList.PropTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired
}

export default GuestList;
