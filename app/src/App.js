import React, {Component} from "react";
import BtnBotcamp from "./components/BtnBotcamp"

class App extends React.Component {
  render() {
    // return <button className="btn-botcamp">Enter</button>        // line moved to BtnBotcamp
    return <BtnBotcamp />
  }
}

export default App                        // this is responsible to make this class available for outside, namelly index.js from src
