import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import SelfDismissAlert from './components/SelfDismissAlert';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light')
    const [labelText, setLabelText] = useState("Enable Dark Mode")
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })

        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            setLabelText("Enable Light Mode")
            document.body.style.backgroundColor = '#343a40'
            showAlert("Dark Mode is enabled", "Success")
        }
        else {
            setMode('light');
            setLabelText("Enable Dark Mode")
            document.body.style.backgroundColor = 'white'
            showAlert("Light Mode is enabled", "Success")
        }
    }
    return (
        <>
            <Router>
                <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} labelText={labelText} />
                <div className="container">
                    <SelfDismissAlert alert={alert} />
                    <Switch>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/">
                            <Alert />
                            <TextForm heading="Enter the text here" mode={mode} showAlert={showAlert} />
                        </Route>
                    </Switch>  
                </div>
            </Router>
        </>
    );
}

export default App;
