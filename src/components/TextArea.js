import React,{useState} from 'react'

export default function TextArea(props) {
  let [text,setText] = useState("Enter the text");
  // const [darkStyle,setDarkStyle] = useState({ 
  // });
  const myStyle1 = {
    color: "white"
  }
  const myStyle2 = {
    color: "black"
  }
  function handleClick(){
    setText(text.toUpperCase());
    props.showAlert("Text Converted to upper case","Success");
  }
  function handleChange(event) {
    setText(event.target.value);
  }
  function handleLowerClick(){
    setText(text.toLowerCase());
    props.showAlert("Text Converted to lower case","Success");
  }
  return (
    <>
    <div className="form-floating" style={props.mode===true?myStyle1:myStyle2}>
    <textarea className="form-control mt-5" value = {text} id="floatingTextarea2" onChange={handleChange} style={{height:"100px"}}></textarea>
    <button className={`btn btn-${props.mode===true?'primary':'secondary'} my-2 mx-2`} onClick={handleClick}>Convert to upper case</button>
    <button className={`btn btn-${props.mode===true?'primary':'secondary'} my-2 mx-2`} onClick={handleLowerClick}>Convert to lower case</button>
    <h2 className="my-2">Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>Average read : {0.008*text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
