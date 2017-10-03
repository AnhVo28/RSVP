import React, {Component} from 'react';
import PropTypes from 'prop-types';



class AddForm extends Component {

render(){
  return(
    <form onSubmit={this.props.getSubmit}>
        <input
          onChange={this.props.onChangeInPedding}
          type="text"
          value={this.props.pendingGuest}
          placeholder="Invite Someone"/>
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>
  )
}



}
AddForm.PropTypes = {

}

export default AddForm;
