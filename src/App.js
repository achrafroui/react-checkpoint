import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <section style={{backgroundColor: "yellow"}} className="container">
     <h1 >Contact me!</h1>
      <form >
                    <div className="form-group" >
                        <label for="name">Name</label>
                        <input   className="form-control" type="text" id="name" />
                    </div>
                    <div className="form-group" >
                        <label for="phone">Phone number</label>
                        <input className="form-control"  type="text" id="phone" />
                    </div>
                    <div className="form-group" >
                        <label for="comment">Ask me anything :) </label>
                        <input  className="form-control" type="text" id="email"/>
                    </div>
                    <div className="text-center">
             <button className="btn btn-success btn-lg"   type="submit">Send </button>
             </div>
            </form>
            </section>
  );
}

export default App;
