import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUppercase = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to UPPERCASE!", "Success")
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase!", "Success")
    }

    const handlePunctution = () => {
        setText(text.replace(/[.,-/#!$%&;:{}=\-_`~()"']/g, ' '))
        props.showAlert("Punctutions removed!", "Success")
    }

    const handleNewLines = () => {
        setText(text.replace(/\n/g, ' '))
        props.showAlert("NewLines removed!", "Success")
    }

    const handleSpaces = () => {
        setText(text.replace(/\s+/g, ' '))
        props.showAlert("Extra spaces removed!", "Success")
    }
    
    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard!", "Success")
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Cleared!", "Success")
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className={`container my-3 text-${props.mode === 'dark'?'white':'dark'}`}>
            <form className="form-group">
                <h4 className="heading">{props.heading}</h4>
                <textarea className={`my-3 form-control text-${props.mode === 'dark'?'white':'dark'}`} style={props.mode === 'light'?{backgroundColor : 'white'}:{backgroundColor : '#343a40'}} value={text} onChange={handleOnChange} id="text" rows="5" placeholder='Add your text here...'></textarea>
            </form>
            <button className="btn btn-primary mx-2 my-2 " onClick={handleUppercase}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2 my-2 " onClick={handleLowerCase}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2 " onClick={handlePunctution}>Remove Punctutions </button>
            <button className="btn btn-primary mx-2 my-2 " onClick={handleNewLines}>Remove New Lines </button>
            <button className="btn btn-primary mx-2 my-2 " onClick={handleSpaces}>Remove Extra Spaces </button>
            <button className="btn btn-primary mx-2 my-2 " onClick={handleCopyText}>Copy Text </button>
            <button className="btn btn-primary mx-2 my-2 " onClick={handleClearText}>Clear Text</button>
        </div>
        <div className={`container my-3 text-${props.mode === 'dark'?'white':'dark'}`}>
            <h1>Text Summary is :</h1>
            <p>The number of words are {text === '' ? text.split("").length : text.trim().split(" ").length} and the number of characters are {text.trim().length}</p>
        </div>
        </>
    )
}

TextForm.prototype = {
    heading: PropTypes.string.isRequired
}
