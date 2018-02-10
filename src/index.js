import React from 'react';
import { render } from 'react-dom';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const Input = ({text , number , addlist})=>(
  <div>
  {number}
  <input type="checkbox"/>
  {text}
  <br/>
  </div>
)

const App = () => (
  <div style={styles}>
     <h2>My Basic To Do List</h2>
     <Input number="1" text="Create a github repo
     of my to do list"/>
     <Input number="2" text="make an ok button"/>
     <Input number="3" text="make the ok add a task
     and clear the input"/>
     <Input number="4" text="make tasks chexkable"/>
  </div>
);

render(<App />, document.getElementById('root'));
