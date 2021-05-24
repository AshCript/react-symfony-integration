import React from 'react';
import { Container, Menu, Input } from 'semantic-ui-react';
import {Link, NavLink} from 'react-router-dom';

class Navbar extends React.Component{
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
  render(){
    const {activeItem} = this.state;
    return(
      <div>
          <Menu secondary inverted size="mini">
              <Menu.Item name='Accueil' active={activeItem === 'Accueil'} onClick = {this.handleItemClick} />
              <Menu.Item name='Messages' active={activeItem === 'Messages'} onClick = {this.handleItemClick}/>
              <Menu.Item name="Amis" active={activeItem === 'Amis'} onClick = {this.handleItemClick}/>
              <Menu.Menu position = 'right'>
              <Menu.Item>
                <Input inverted transparent icon='search' placeholder='Chercher...'/>
              </Menu.Item>
              <Menu.Item name='Se déconnecter' active={activeItem === 'Se déconnecter'} onClick = {this.handleItemClick}/>
            </Menu.Menu>
          </Menu>
      </div>
    )
  }
}

export default Navbar;