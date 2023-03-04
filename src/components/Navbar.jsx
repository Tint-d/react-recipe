import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [input,setInput] = useState('');
    const navigate = useNavigate()


    const submitHandler = (e) =>{
        e.preventDefault()
        navigate('/search/' + input)
    }

  return (
    <div>
        <ul className=' flex justify-around p-5 font-bold text-2xl bg-gray-200 text-orange-500 shadow-lg align-middle items-center'>
            <li>
                <NavLink to={'/'}>
                   Home
                </NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to={'/'}>
                    Menu
                </NavLink>
            </li>
             <li>
                <NavLink to={'/'}>
                    Content
                </NavLink>
            </li>
        </ul>
        <div>
           <form onSubmit={submitHandler}>
            <input className=' bg-black text-white' value={input} onChange={e => setInput(e.target.value)}  type="text"  />
           </form>
        </div>
    </div>
  )
}

export default Navbar