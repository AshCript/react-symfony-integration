import React, { Component } from 'react';
import Clock from './Clock';
import {Table} from 'semantic-ui-react';
import CrudForm from './CrudForm';
import CrudList from './CrudList';
import 'jquery/dist/jquery.min.js';

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = this.getStates();

  }
  
  componentDidMount() {
    // alert("Crud is mounted")
  }

  componentWillUnmount() {
    // alert("Crud is unmounted")
  }

  handleChange = (e, type) =>{
    const {newMember, editMode} = this.state;
    const val = e.currentTarget.value;

    switch (type) {
      case "nom":
        newMember.nom = val;
        this.setState({});
        break;
      case "age":
        if(val >= 0 && val <= 150){
          newMember.age = val;
          this.setState({newMember});
        }
      default:
        break;
    }
    if(!editMode && newMember.nom != '' && newMember.age != ''){
      this.setState({submitStatus: <input type="Submit" className="ui orange button" id="sendButton" value="Ajouter"/>})
    }else{
      this.setState({submitStatus: <input type="Submit" className="ui orange button" id="sendButton" value="Ajouter" disabled/>})
    }
    if(editMode){
      this.setState({submitStatus: <button className="ui orange button" onClick={() => this.refreshState()}>Terminer</button>});
    }
  }
  handleAdd = (event) =>{
    event.preventDefault();
    const {members, newMember} = this.state;
    let indexMax = 0;
    for(let i = 0 ; i < members.length; i++){
      if(indexMax < members[i].id)
        indexMax = members[i].id
    }
    newMember.id = indexMax + 1; 
    members.push(newMember);
  
    this.setState(members);
    this.refreshState();
  }
  refreshState = () =>{
    this.setState({
      editMode: false,
      newMember: {
        id: '',
        nom: '',
        age: ''
      },
      submitStatus: <input type="Submit" className="ui orange button" id="sendButton" value="Ajouter" disabled/>,
    });
  }

  handleEdit = (id) =>{
    let {members, newMember} = this.state;
    newMember = members.find(member => member.id === id);
    
    this.setState({
      newMember,
      editMode: true,
      addOrEdit : 'Modifier',
      submitStatus: <button className="ui orange button" onClick={() => this.refreshState()}>Terminer</button>
  });
  }
  handleDelete = (id) =>{
    const {members} = this.state;
    const index = members.findIndex((member) => 
      member.id === id
    );
    members.splice(index, 1);
    this.setState(members);
  }

  sortBy = (arg) =>{
    const {members} = this.state;
    const choice = arg;
    switch (arg) {
      case 'id':
        for(let i = 0 ; i < members.length ; i++){
          for(let j = i ; j < members.length ; j++){
            if(members[i].id > members[j].id){
              let temp = members[i];
              members[i] = members[j];
              members[j] = temp;
            }
          }
        }
        break;
      case 'nom':
        for(let i = 0 ; i < members.length ; i++){
          for(let j = i ; j < members.length ; j++){
            if(members[i].nom > members[j].nom){
              let temp = members[i];
              members[i] = members[j];
              members[j] = temp;
            }
          }
        }
        break;
      case 'age':
        for(let i = 0 ; i < members.length ; i++){
          for(let j = i ; j < members.length ; j++){
            if(members[i].age > members[j].age){
              let temp = members[i];
              members[i] = members[j];
              members[j] = temp;
            }
          }
        }
        break;
      default:
        break;
    }

    this.setState({members});
  }
  getStates = () =>{
    return{
      members: [
        {
          id: 1,
          nom: 'Rakoto',
          age: 18
        },
        {
          id: 2,
          nom: 'Rabe',
          age: 19
        },
        {
          id: 3,
          nom: 'Rasoa',
          age: 17
        },
        {
          id: 4,
          nom: 'Ranaivo',
          age: 21
        }
      ],
      editMode: false,
      newMember: {
        id: '',
        nom: '',
        age: ''
      },
      submitStatus: <input type="Submit" className="ui orange button" id="sendButton" value="Ajouter" disabled/>,
    }
  }

  render() {
    const {members, newMember, submitStatus} = this.state;
    const title = "Liste des membres";
    return (
      <>
        <h1>{title}</h1>
        <Table inverted className="ui inverted black memberList">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Nom</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell><Clock/></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {members.map(member =>
              <CrudList member = {member} handleEdit = {this.handleEdit} handleDelete = {this.handleDelete} />
            )}
          </Table.Body>
        </Table>
        <CrudForm handleAdd = {this.handleAdd} handleChange = {this.handleChange} submitStatus = {submitStatus} newMember = {newMember}/>
      </>
    );
  }
}

export default Crud;