import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = this.getDate();
  }
  componentDidMount = () =>{
    this.timerID = setInterval(() => {
      this.setState(this.getDate)
    }, 1000)
  }
  componentWillUnmount = () =>{
    clearInterval(this.timerID)
  }
  getDate = () =>{
    return{
      date: new Date()
    }
  }
  render(){
    const {date} = this.state;
    return(
        <div>
          <div className = "ui button circular teal">
          {date.toLocaleTimeString()}
          </div>
        </div>
    );
  }
}

export default Clock;