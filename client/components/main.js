import React, { useState } from 'react'
import NoteEditor from './noteEditor'
import SearchInput from './search-input'
import NoteList from './noteList'

const Main = () => {
  const [textNote, setNoteText] = useState('')
  const [notes, setNotes] = useState([
    { id: 'Hello! This is first note', text: 'Hello! This is a first note', date: '26.05.2021' },
    { id: 'Hello! This is second note', text: 'Hello! This is second note', date: '26.05.2021' },
    { id: 'Hello! This is third note', text: 'Hello! This is third note', date: '26.05.2021' }
  ])
  const [search, setSearch] = useState('')

  const AddNote = () => {
    if (textNote !== 0) {
      const newNote = {
        id: textNote.trim(),
        text: textNote,
        date: new Date().toLocaleString().slice(0, 10)
      }

      setNotes((prev) => [...prev, newNote])
      setNoteText('')
    }
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }
  return (
    <div className="main">
      <SearchInput search={search} setSearch={setSearch} />
      <NoteEditor textNote={textNote} setNoteText={setNoteText} AddNote={AddNote} />
      <NoteList notes={notes} deleteNote={deleteNote} search={search} />
    </div>
  )
}

export default React.memo(Main)
