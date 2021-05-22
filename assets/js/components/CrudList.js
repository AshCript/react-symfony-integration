import React, { Component } from 'react';
import {Table} from 'semantic-ui-react';
class CrudList extends Component {
  render() {
    const {member, handleEdit, handleDelete} = this.props;
    return (
      <Table.Row className = "newMember">
        <Table.Cell>{member.id}</Table.Cell>
        <Table.Cell>{member.nom}</Table.Cell>
        <Table.Cell>{member.age}</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>
          <i className="edit teal circular inverted large icon editRemoveBtn" onClick = {() => handleEdit(member.id)}></i>
          <i className="delete red circular inverted large icon editRemoveBtn" onClick={() => handleDelete(member.id)}></i>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default CrudList;