import React from 'react'
import './style.scss'

const Note = ({ text, date, deleteNote, id }) => {
  return (
    <div className="note-containter">
      <div className="note">
        <div className="note__content">{text}</div>
        <div className="note-footer">
          <small className="note__date">{date}</small>
          <button type="button" className="note__delete-button" onClick={() => deleteNote(id)}>
            X
          </button>
        </div>
      </div>
    </div>
  )
}

Note.propTypes = {}

export default React.memo(Note)
