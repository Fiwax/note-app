import React from 'react'
import Note from './note'

const NoteList = ({ notes, deleteNote, search }) => {
  return (
    <div className="note-list">
      {notes
        .reduce((acc, rec) => {
          if (rec.text.includes(search) || search === '') return [...acc, rec]
          return acc
        }, [])
        .map((note) => {
          return (
            <div key={note.id}>
              <Note text={note.text} date={note.date} id={note.id} deleteNote={deleteNote} />
            </div>
          )
        })}
    </div>
  )
}

export default NoteList
