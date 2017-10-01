import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import GuestList from './GuestList';



class App extends Component {

  state = {
    guests: [
      {
        name: 'Tresure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nic',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Ryan Vo',
        isConfirmed: true,
        isEditing: false
      },
    ]
  }

  getTotalInvited =()=> this.state.guests.length;
  // getAttendingGuest =() =>
  // gitUnconfirmedGuests=() =>



  togglePropertyAt = (property, indexToChange)=>{
    this.setState({
      guests: this.state.guests.map((guest, index)=>{
        if(indexToChange === index){
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    })
  }

  toggleConfirmationAt= (index)=>{
    this.togglePropertyAt("isConfirmed", index)
  }

  getEdit = (index)=>{
    this.togglePropertyAt("isEditing", index)
  }

  setNameAt = (name, indexToChange)=>{
    this.setState({
      guests: this.state.guests.map((guest, index)=>{
        if(indexToChange === index){
          return {
            ...guest,
            name
          }
        }
        return guest;
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone"/>
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox"/> Hide those who haven't responded
            </label>
          </div>
          <Counter getTotalInvited = {this.getTotalInvited} />
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            getEdit = {this.getEdit}
            setNameAt = {this.setNameAt}
            />
        </div>
      </div>
    );
  }
}

export default App;
