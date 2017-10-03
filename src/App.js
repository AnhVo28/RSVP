import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddForm from './AddForm'
import Counter from './Counter';
import GuestList from './GuestList';



class App extends Component {

  state = {
    isFilter: false,
    pendingGuest: '',
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
  getAttendingGuest =() => {
    let counter = 0;
    this.state.guests.map(guest=>{
      if(guest.isConfirmed){
        counter++
      }
    });
    return counter;
  }
  // gitUnconfirmedGuests=() =>

  toggleFilter = ()=>{
    this.setState({
      isFilter: !this.state.isFilter
    })
  }


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

  getSubmit = (e)=>{
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    })
}
  getRemove = (index)=>{
    this.setState({
      guests: [
        ...this.state.guests.slice(0,index),
        ...this.state.guests.slice(index+1)
      ]
    })
  }

  onChangeInPedding = (e)=>{
    this.setState({
      pendingGuest: e.target.value
    })
  }

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuest();
    const numberUnconfirm = totalInvited - numberAttending;
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
            <AddForm
              getSubmit = {this.getSubmit}
              onChangeInPedding={this.onChangeInPedding}
              pendingGuest ={this.state.pendingGuest}

              />

        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input onChange={this.toggleFilter} type="checkbox"/> Hide those who haven't responded
            </label>
          </div>
          <Counter
            totalInvited = {totalInvited}
            numberAttending={numberAttending}
            numberUnconfirm={numberUnconfirm} />
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            getEdit = {this.getEdit}
            setNameAt = {this.setNameAt}
            isFilter={this.state.isFilter}
            getRemove= {this.getRemove}
            pendingGuest ={this.state.pendingGuest}
            />
        </div>
      </div>
    );
  }
}

export default App;
