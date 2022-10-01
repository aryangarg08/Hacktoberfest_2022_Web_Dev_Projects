import React,{useState} from 'react'



export default function TextForm(data) {
  const handleUpClick = ()=>{
    // console.log('Uppercase was clicked: ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    data.showAlert("Converted to uppercase!","success")
  }
  const handleLowClick = ()=>{
    // console.log('Uppercase was clicked: ' + text);
    let newText = text.toLowerCase();
    setText(newText)
    data.showAlert("Converted to Lowercase!","success");
  }
  const handleClear = () =>{
    let newText ='';
    setText(newText);
    data.showAlert("Cleared","success")
  }
  const handleOnChange = (event)=>{
    // console.log('On Change');
    setText(event.target.value);
  }
  const handleCopy =() =>{
    console.log("copied");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    data.showAlert("Copied!","success")
  }
  const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:data.mode==='dark'?'white':'grey'}}>
      <h1>{data.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:data.mode==='light'?'white':'grey',color:data.mode==='dark'?'white':'grey'}} onChange={handleOnChange} id="myBox" rows="3"></textarea>
      </div>
      <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Upper case</button>
      <button className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>Convert to Lower case</button>
      <button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-primary mx-2 my-1'onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:data.mode==='dark'?'white':'grey'}}>
      <h2>Your text summary</h2>
      <p>{text.length} characters and {text.split(" ").filter((e)=>{return e.length!==0}).length} words</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
    </div>
    </>
  )
};
