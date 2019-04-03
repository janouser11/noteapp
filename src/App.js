import React, { Component } from "react";
import "./App.css";
import Search from "./components/search";
import { Grid, Button, Modal } from "@material-ui/core";
import Notes from "./components/notes";
import ModalContent from "./components/modalContent";

class App extends Component {
  state = {
    open: false,
    notes: [
      { id: 1, body: "This is the first note" },
      { id: 2, body: "This is the second note" },
      { id: 3, body: "This is the third note" },
      { id: 4, body: "This is the fourth note" },
      { id: 5, body: "This is the fifth note" }
    ],
    filteredKeyword: ""
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = body => {
    console.log("Saving new note: " + body);
    //handle creating new note
    //ajax call to create note
    //on success, update state

    //todo: add validation to not create a note with the same id

    let updatedNotes = this.state.notes.concat({ id: 6, body });
    this.setState({
      notes: updatedNotes
    });
    //then close modal
    this.handleClose();
  };

  deleteNote = id => {
    //remove note with ajax call
    // on success, filter out note
    const filteredNotes = this.state.notes.filter(note => note.id !== id);

    this.setState({
      filteredNotes
    });
  };

  updateNote = note => {
    //update note with ajax call
    //on success

    //update note in state
    //make copy
    let notesToUpdate = this.state.notes;
    //find note
    let noteToUpdate = this.state.notes.findIndex(item => item.id == note.id);
    //update note
    notesToUpdate[noteToUpdate] = note;

    this.setState({
      notes: notesToUpdate
    });
  };

  filterNotesBySearchResult = keyword => {
    this.setState({
      filteredKeyword: keyword
    });
  };

  determineNotes = (notes, keyword) => {
    if (keyword.length > 0) {
      return notes.filter(note => note.body.includes(keyword));
    }

    return notes;
  };

  render() {
    const { open, notes, filteredKeyword } = this.state;

    //get filtered notes if any
    const filteredNotes = this.determineNotes(notes, filteredKeyword);

    return (
      <div className="App">
        <Grid container spacing={24} alignItems="center">
          <Grid item xs={6}>
            <div className="search-container">
              <Search
                filterNotesBySearchResult={this.filterNotesBySearchResult}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className={"button"}
              color="primary"
              size="large"
              onClick={this.handleOpen}
            >
              New Note
            </Button>
          </Grid>
          <Modal
            // style={{ alignItems: "center", justifyContent: "center" }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={this.handleClose}
          >
            <ModalContent
              handleClose={this.handleClose}
              handleSave={this.handleSave}
            />
          </Modal>
          <Grid item xs={12}>
            <Notes
              notes={filteredNotes}
              deleteNote={this.deleteNote}
              updateNote={this.updateNote}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
