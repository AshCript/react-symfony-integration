import React, { Component } from 'react';

class CrudForm extends Component {
  render() {
    const {handleAdd, handleChange, submitStatus, newMember} = this.props;
    return (
      <form onSubmit = {(e) => handleAdd(e)}>
        <div className="ui inverted segment">
          <div class="ui inverted transparent icon input">
            <input type="text" placeholder="Nom..." value={newMember.nom} onChange={(e) => handleChange(e, 'nom')}/>
            <input type="text" placeholder="Age..." value={newMember.age} onChange={(e) => handleChange(e, 'age')}/>
          </div>
          {submitStatus}
        </div>
      </form>
    );
  }
}

export default CrudForm;