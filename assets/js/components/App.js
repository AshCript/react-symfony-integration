import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Modal } from 'semantic-ui-react';
class App extends React.Component{
  render(){
    return (
      <Modal
      trigger={<Button>Show Modal</Button>}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
    )
  }
}

export default App;