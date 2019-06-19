import React from 'react';
import './App.css';


class App extends React.Component {
  
componentDidMount (){
  const prevScrollpos = 0;

  window.onscroll = function() {
    var element = document.getElementById("nav");
    if(prevScrollpos!==window.pageYOffset)
  {
  element.classList.add("visual")}
  else
  element.classList.remove("visual");
}

}

  render(){


    return (
      <div className="App">
        <div>
        <img   className ="imgcont" src="https://images.unsplash.com/photo-1559163179-3fd017552229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Italian Trulli"></img>
        </div>
        <div id ="nav" className="nav-container">
       <ul>
        <li className="navitem">Home</li>
        <li className="navitem">Blog</li>
        <li className="navitem">Projects</li>
        <li className="navitem">About</li>
        <li className="navitem">Contact</li>  
       </ul>
        </div>
      
      </div>
    );
  }
}

export default App;
