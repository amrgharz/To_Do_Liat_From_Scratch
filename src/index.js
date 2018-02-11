import React from 'react';
import { render } from 'react-dom';
const styles = {
  fontFamily: 'sans-serif',
};
const Input = ({text , number , addlist})=>(
  <div>
  {number}
  <input type="checkbox"/>
  {text}
  <br/>
  </div>
);
class Cont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []

    };
  }
  onChange = (event)=>{
  this.setState({term:event.target.value});
  }
  onSubmit = (event) =>{
    event.preventDefault();
    const newItems = [...this.state.items, this.state.term]
    console.log(newItems)
    this.setState({
      term: '',
      items: newItems

    });
  }
  render(){
    return(
      <div>
      <form className="Cont" onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
      {this.state.items.map(item => <h4>{item}</h4>)}
      </div>
    );
  }
}
const App = () => (
  <div style={styles}>
     <h2>My Basic To Do List</h2>
     <Cont />
     <Input number="1" text="Create a github repo
     of my to do list"/>
     <Input number="2" text="make an ok button"/>
     <Input number="3" text="make the ok add a task
     and clear the input"/>
     <Input number="4" text="make tasks chexkable"/>
  </div>
);
render(<App />, document.getElementById("root"));


