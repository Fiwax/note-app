import React from 'react'
import './style.scss'

const NoteEditor = ({ textNote, setNoteText, AddNote }) => {
  const characterLimit = 200
  const handleOnchange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value)
    }
  }
  return (
    <div className=" editor">
      <div className="note">
        <textarea
          className="text-input"
          placeholder="Type..."
          cols="30"
          rows="10"
          value={textNote}
          onChange={handleOnchange}
        />
        <div className="note-footer">
          <span className="">Remaining: {characterLimit - textNote.length}</span>
          <button className="save-button" type="button" onClick={AddNote}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

NoteEditor.propTypes = {}

export default React.memo(NoteEditor)
