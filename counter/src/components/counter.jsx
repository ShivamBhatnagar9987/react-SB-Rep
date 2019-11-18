import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Counter extends Component {
state={count:this.props.counter.value  ,
  imageUrl:"https://picsum.photos/200"
};
styles={
  fontSize:'10px',
  fontWeight:"bold"
}
handleCount=()=>
{
  this.setState({count:this.state.count+1});
}
  render() {
    return (
      <div>
      <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={this.handleCount} className="btn btn-secondary btn-sm">Increment</button>
	  <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
    }
    formatCount()
    {
      const {count} = this.state;
      return count===0?"Zero":count;
    }
    getBadgeClasses()
    {
      let classes="badge m-2 badge-";
      classes+=this.state.count===0?"warning":"primary";
      return classes;
    }
  }
export default Counter;
