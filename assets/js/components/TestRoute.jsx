import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {Menu, Input} from 'semantic-ui-react'
import Messages from './Messages'
import Amis from './Amis'
import Clock from './Clock'
import App from './App'
class TestRoute extends Component {
  constructor(props){
    super(props);
    this.state = this.getActiveItem();
  }

  handleItemClick = (e, {name}) => {
    this.setState({
      activeItem: name
    });
  }
  getActiveItem = () =>{
    return{
      activeItem: 'Accueil'
    }
  }
  render() {
    const {activeItem} = this.state;
    return (
      <>
        <Router>
          <Menu secondary inverted size="mini">
            <Link to={'/'}>    
              <Menu.Item name='Accueil' active={activeItem === 'Accueil'} onClick = {this.handleItemClick} />
            </Link>
            <Link to={'/messages'}>
                <Menu.Item name='Messages' active={activeItem === 'Messages'} onClick = {this.handleItemClick}/>
            </Link>
            <Link to={'/amis'}>
                <Menu.Item name="Amis" active={activeItem === 'Amis'} onClick = {this.handleItemClick}/>
            </Link>
            <Link to={'/crud'}>
                <Menu.Item name="Crud" active={activeItem === 'Crud'} onClick = {this.handleItemClick}/>
            </Link>
                <Menu.Menu position = 'right'>
                <Menu.Item>
                  <Input inverted transparent icon='search' placeholder='Chercher...'/>
                </Menu.Item>
                <Menu.Item name='Se déconnecter' active={activeItem === 'Se déconnecter'} onClick = {this.handleItemClick}/>
              </Menu.Menu>
            </Menu>
          <Switch>
            <Route exact path='/' component={Clock}></Route>
            <Route path='/messages' component={Messages}></Route>
            <Route path='/amis' component={Amis}></Route>
            <Route path='/crud' component={App}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default TestRoute