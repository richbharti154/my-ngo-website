import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../../Component/Navbar/Navbar.module.css'

export default function Navbar() {

  return (
    <>
      <div className={style.Container}>

        <NavLink className={style.Navbar} to='/'>Home</NavLink>
        <NavLink className={style.Navbar} to='/Aboutus'>Aboutus</NavLink>
        <NavLink className={style.Navbar} to='/Education'>  Education</NavLink>
        <NavLink className={style.Navbar} to='/Programme'>Programme</NavLink>
        <NavLink className={style.Navbar} to='/Gallery'>Gallery</NavLink>
        <NavLink className={style.Navbar} to='/Joinus'>Joinus</NavLink>

      </div>


    </>
  )
}
