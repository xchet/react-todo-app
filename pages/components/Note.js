import React, { Component } from 'react';

class Note extends Component {

  render() {
    return (
      <div className="note" onClick={() => this.deleteNote(n.id)}>
        {n.note}
      </div>
    );
  }
}

export default Note;
