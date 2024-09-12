import React from 'react'

const SearchItem = ({searchValue, setSearchValue}) => {
  return (
    <form className='searchItem' onSubmit={(e) => e.preventDefault()}>
        <input type="text" name='search' id='search'
            value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
        />
    </form>
  )
}

export default SearchItem