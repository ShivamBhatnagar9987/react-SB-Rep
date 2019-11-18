import React, {Component} from 'react';
import Counter from './counter.jsx';
class Counters extends Component
{
state=
{
counters: [
{id:1,value:3},
{id:2,value:7},
{id:3,value:2},
{id:4,value:1}
]
};
resetCount=()=>
{
};
handleDelete=(counterId)=>
{
	const counter= this.state.counters.filter(c=>c.id!==counterId);
	this.setState({counters:counter});

}
render()
{
 return( 
 <div >
 <button onClick={this.resetCount} className="btn btn-primary btn-sm">Reset</button>
{ this.state.counters.map(counter=>
<Counter 
onDelete={this.handleDelete} 
key={counter.id} 
counter={counter}
/>)} 
 </div>
 );

}

}
export default Counters;