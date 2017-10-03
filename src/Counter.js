import React, { PropTypes } from 'react'

const Counter = props =>{
return (
      <table className="counter">
        <tbody>
          <tr>
            <td>Attending:</td>
            <td>{props.numberAttending}</td>
          </tr>
          <tr>
            <td>Unconfirmed:</td>
            <td>{props.numberUnconfirm}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{props.totalInvited}</td>
          </tr>
        </tbody>
      </table>
)
};

export default Counter;
