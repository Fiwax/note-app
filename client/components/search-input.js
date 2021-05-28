import React from 'react'

const SearchInput = ({search, setSearch}) => {
  return (
    <div>
      <div className="header">Notes</div>
      <form className="search-form">
        <input
          className="search-form__input"
          type="text"
          placeholder="Search a note.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchInput
