import React from 'react';
import PropTypes from 'prop-types';



const PendingGuest = props => {
  if(props.name){
  return (
    <li class="pending">
      <span>{props.name}</span>
    </li>
  )
}
 return null;
}



PendingGuest.PropTypes = {

}

export default PendingGuest;
