import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import GuestName from './GuestName';
import PendingGuest from './PendingGuest'

const GuestList = props => {
    return (
      <ul>
        <PendingGuest name={props.pendingGuest} />
        {props.guests
          .filter(guest => !props.isFilter || guest.isConfirmed)
          .map((guest, index) =>
          <Guest
            key={index}
            name= {guest.name}
            isConfirmed = {guest.isConfirmed}
            handleConfirmation = {()=>props.toggleConfirmationAt(index)}
            handleEdit = {()=>props.getEdit(index)}
            isEditing = {guest.isEditing}
            setName = {(text) => props.setNameAt(text, index)}
            handleRemove = {()=>props.getRemove(index)}
             />)}
      </ul>
    );
}

GuestList.PropTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired
}

export default GuestList;
