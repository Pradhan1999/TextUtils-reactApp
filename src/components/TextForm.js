import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter text here..')

  // uppercase
  const handleUpClick = () => {
    let boxvalue = text.toUpperCase();
    setText(boxvalue);
    props.showAlert("Converted to the Uppercase", 'success');
  }

  // lowercase
  const handleDownClick = () => {
    let boxvalue = text.toLowerCase();
    setText(boxvalue);
    props.showAlert("Converted to the Lowercase", 'success');
  }

  // text to speech
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking", 'success');
  }

  // Copy the text inside the text field
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", 'success');
  }

  // clear text in textarea
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Form cleared", 'success');
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

    // // count words
  // const countWords = (str) => {
  //   str = str.replace(/(^\s*)|(\s*$)/gi, "");
  //   str = str.replace(/[ ]{2,}/gi, " ");
  //   str = str.replace(/\n /, "\n");

  //   if (str === '') {
  //     return 0
  //   }
  //   else {

  //     return str.split(' ').length;
  //   }

  // }


  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#235c89' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleDownClick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={copyText}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={speak}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" /></svg> Read Aloud</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and
          {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
        <h3><i>Preview</i></h3>
        <p>{text}</p>
      </div>
    </>
  )
}
