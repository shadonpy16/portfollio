import React from 'react'
import { AiFillGithub,AiFillLinkedin,AiFillSkype } from "react-icons/ai";
import profileImg from './assets/profile.png';
import Projects from './Projects';
import Contact from './Contact';


const MainContent = () => {
  return (
    <div className=''>
    <div className='flex flex-wrap-reverse justify-between'>
        <div className="font-roboto py-5">
            <p className='text-2xl font-bold capitalize'>hi there,</p>
            <p className='text-2xl font-bold capitalize py-2'>i'm golap mahabub</p>
            <p className='text-lg capitalize'>full stack web developer</p>
            <p className='w-96 mt-4'>Versatile Full Stack Web Developer with expertise in front-end and back-end technologies, crafting seamless digital experiences.</p>
            <p className='py-6'>skills: 
              <div>
                <button className='btn-sm'>python</button>
                <button className='btn-sm'>Javascript</button>
                <button className='btn-sm'>reactjs</button>
                <button className='btn-sm'>nextjs</button>
                <button className='btn-sm'>html</button>
                <button className='btn-sm'>css</button>
              </div>
            </p>
            <div className="flex gap-3">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillSkype />
            </div>
        </div>
        <div className="right py-0">
            <img src={profileImg} alt="" />
        </div>
    </div>
    <Projects />
    <Contact />
    </div>
  )
}

export default MainContent;