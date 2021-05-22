import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Crud from './Crud';
class App extends React.Component{
  showMsg = () =>{
      alert("Hello");
  }

  render(){
    return (
      <>
        <Modal
          trigger={<Button>Show Modal</Button>}
          header='Reminder!'
          content='Call Benjamin regarding the reports.'
          actions={['Annuler', { key: 'done', content: 'Procéder', positive: true, onClick: () => this.showMsg()}]}
        />
        <Crud/>
      </>
    )
  }
}

export default App;