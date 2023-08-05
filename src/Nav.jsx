import React from 'react';
import {MdLightMode, MdDarkMode } from "react-icons/md";

export const Nav = ({Theme,ThemeSwitcher}) => {
  return (
    <div className='flex justify-between items-center h-20 '>
    <div className="logo">
        <p className='font-bold font-poppins text-lg capitalize'>golap-m</p>
    </div>
    <div className="flex gap-5 font-roboto font-medium">
    <ul className='flex'>
                <li className='cursor-pointer float-right'>{Theme === 'dark' ? (<MdLightMode className='h-5 w-full' onClick={ThemeSwitcher} />) : (<MdDarkMode className='h-5 w-full' onClick={ThemeSwitcher} />)
                }</li>
            </ul>
    </div>
    </div>
  )
}
