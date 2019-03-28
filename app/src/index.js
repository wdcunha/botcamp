import React from "react";
import ReactDOM from "react-dom";
import App from "./App"                                 // call the class that was moved, important to make it available here
// class App extends React.Component {                  // this will be changed by putting in import option above
// class App extends React.Component {                  // moved to app.js because index is not responsible for this
//   render() {
//     return <button>Enter</button>
//   }
// }
ReactDOM.render(<App />, document.getElementById("root"))
