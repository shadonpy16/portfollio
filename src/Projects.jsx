import React from 'react';
import {data} from './assets/data';
import { useState } from 'react';

const Projects = () => {
  const [Alldata,setData]=useState(data);

  const filteredData=(toolsname)=>{
    const res=data.filter((dt)=>dt.tools === toolsname );
    setData(res);
  }
  const allData=()=>{
    const res=data.map((d)=>d);
    setData(res);
  }
  
  return (
    <div className='py-20'>  
        <div className='grid place-content-center'>
        <p className='text-center'>Projects</p>
        <div className="btngroup text-center">
            <button className='btn-sm' onClick={allData}>all</button>
            <button className='btn-sm' onClick={()=>filteredData('django')}>django</button>
            <button className='btn-sm' onClick={()=>filteredData('reactjs')}>reactjs</button>
            <button className='btn-sm' onClick={()=>filteredData('nextjs')}>nextjs</button>
            <button className='btn-sm' onClick={()=>filteredData('flask')}>flask</button>
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
            {Alldata.map((d)=>(
                <div className="card" key={Math.random()}>
                <p>{d.name}</p>
                <img src={d.thumbnail} alt="" />
                <p>{d.url}</p>       
            </div>
            ))}
            
        </div>
</div>
    </div>
  )
}

export default Projects;