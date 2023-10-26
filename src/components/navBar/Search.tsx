import React from 'react'
import { BsSearch } from 'react-icons/bs'
const Search = () => {
    const className = {
        form:" flex gap-2",
        input: " text-amber-950 w-72 h-9 border-2 border-amber-950 rounded-md placeholder:text-amber-800 outline-none px-1",
        button:" bg-amber-950  h-8 w-8 text-white text-center rounded-full hover:bg-amber-600 hover:scale-110 duration-500"
    }
  return (
    <form className={className.form}>
      <input type="text" className={className.input} placeholder=' Search '/>
      <button className={className.button} type='submit'>
        <BsSearch className=" ml-2"/>
      </button>
    </form>
  )
}

export default Search
