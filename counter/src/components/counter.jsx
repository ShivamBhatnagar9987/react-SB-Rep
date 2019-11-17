import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Counter extends Component {
state={count:0  ,
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
resetCount=()=>
{
  this.setState({count:0});
}
  render() {
    return (
      <div>
      <button onClick={this.resetCount} className="btn btn-primary btn-sm">Reset</button>
      <div>
      <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={this.handleCount} className="btn btn-secondary btn-sm">Increment</button>
      </div>
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
