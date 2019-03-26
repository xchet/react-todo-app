import React, { Component } from "react";
import Head from "next/head";
import Note from "./components/Note";
import fetch from "isomorphic-unfetch";
import axios from "axios";

class Index extends Component {

  constructor(props) {
    super(props);
    this.state= {
      noteText: '',
      notes: [],
    }
  }

  static async getInitialProps() {
    // const res = await fetch("http://localhost:3000/api/notes");
    const res = await axios("http://localhost:3000/api/notes");
    return {
      notes: res.data.notes
    };
  }

  componentDidMount() {
    if (this.state.notes.length == 0) {
      this.setState({ notes: this.props.notes });
    }
  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }

  addNote = () => {
    if (!this.state.noteText) {return}
    let addId = this.state.notes.length + 1;
    let addnote = this.state.notes.concat({
      id: addId,
      note: this.state.noteText
    });
    this.setState({ notes: addnote, noteText: "" });
  };

  handleKeyPress = (event) => {
    if(event.key === "Enter"){
      let addId = this.state.notes.length + 1;
      let addnote = this.state.notes.concat({
        id: addId,
        note: this.state.noteText
      });
      this.setState({ notes: addnote, noteText: "" });
    }
  }

  deleteNote = id => {
    let noteArr = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: noteArr
    });
  };

  render() {
    return (
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Nextjs Todo App</title>
          <link rel="stylesheet" href="/static/css/style.css"/>
        </Head>
        <div className="container">
          <div className="header">Todo App</div>

          <div className="button" onClick={this.addNote}>ADD</div>
          <input placeholder="Enter Notes" type="text" className="input" 
          ref={((input) => {this.textInput = input})}
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          />

          {this.state.notes.map(n => {
            return (
              <div className="note" onClick={() => this.deleteNote(n.id)}>
                {n.note}
              </div>
            );
          })}
          
        </div>
      </div>
    );
  }
}

export default Index;