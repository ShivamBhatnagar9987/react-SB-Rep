import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Counter extends Component {
styles={
  fontSize:'10px',
  fontWeight:"bold"
}
  render() {
    return (
      <div>
      <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
	  <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
    }
    formatCount()
    {
      const {value} = this.props.counter;
      return value===0?"Zero":value;
    }
    getBadgeClasses()
    {
      let classes="badge m-2 badge-";
      classes+=this.props.counter.value===0?"warning":"primary";
      return classes;
    }
  }
export default Counter;
