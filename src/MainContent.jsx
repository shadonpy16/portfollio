import React from 'react'
import { AiFillGithub,AiFillLinkedin,AiFillSkype } from "react-icons/ai";
import profileImg from './assets/profile.png';
import Projects from './Projects';


const MainContent = () => {
  return (
    <div className=''>
    <div className='flex justify-evenly py-5 items-center'>
        <div className="font-roboto">
            <p className='text-2xl font-bold capitalize'>hi there,</p>
            <p className='text-2xl font-bold capitalize py-2'>i'm golap mahabub</p>
            <p className='text-lg capitalize'>full stack web developer</p>
            <button className='btn py-3'>about me</button>
            <div className="flex gap-3">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillSkype />
            </div>
        </div>
        <div className="right">
            <img src={profileImg} alt="" />
        </div>
    </div>
    <Projects />
    </div>
  )
}

export default MainContent;