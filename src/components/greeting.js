import React, { Component } from 'react';
import * as moment from "moment";

class Greeting extends Component {
  constructor(props) {
    super(props);
    var startTime = moment().hour();
    this.state = { 
      timeofDay: this.getGreeting(startTime)
     }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.tick()
      },
      10000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick = () => {
    this.setState({
      timeofDay: this.getGreeting(moment().hour())
    });
  }
  getGreeting = (hour) => {
    if (hour < 12) {
      return 'Good morning';
    }
    else if (hour < 18) {
      return 'Good afternoon';
    }
    else {
      return 'Good evening';
    }
  }
  render() { 
    return ( 
      <h1 style={{marginBottom: '0.5em'}}>{this.state.timeofDay}, I'm Steven Barrios.</h1>
     );
  }
}
 
export default Greeting;