import React, { useState } from 'react';

const Contact = () => {
    const[inputName,setName]=useState('');
    const[inputMsg,setMsg]=useState('');

    const submitHandelar=(e)=>{
        e.preventDefault();
        console.log("clicked");
    }
  return (
    <div className='flex justify-center items-center'>
        <form>
            <input type="text" placeholder='enter your email' name="email" value={inputName} onChange={(e)=>setName(e.target.value)}/><br />
            <textarea placeholder="write message" name="" id="" cols="30" rows="10" value={inputMsg} onChange={(e)=>setMsg(e.target.value)}></textarea><br />
            <button onClick={submitHandelar}>submit</button>
        </form>
    </div>
  )
}

export default Contact;