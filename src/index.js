import React from "react"
import ReactDOM from 'react-dom'

function Hi(){
  return <div>Hello <strong>Akash!</strong>
  <h4>How are you doing today?</h4>
  <ol>
      <li>Good</li>
      <li>Bad</li>
      <li>Great</li>
  </ol>
  Get the double of what you write in the  box below:

  <br/><br/><input type = "number" placeholder="Enter a number"></input>
    <br/><br/>Output = 
  </div>;

}

ReactDOM.render(<Hi/>, document.querySelector('#root'));