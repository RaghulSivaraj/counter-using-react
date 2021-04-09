import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Counter  extends Component {
    
    styles = {
        fontSize : 10,
        fontWeight :'bold'
    };
   // constructor() {
   //     super();
   //     this.handleIncrement=this.handleIncrement.bind(this);
   //}
  // Arrow function inherit the this keyword
    render() { 
        let classes = this.getBadgeClasses();

        return ( 
          <div>
            <span style = {this.styles} className={classes}>{this.formatCount()}</span>
            <button 
             onClick={ () =>this.props.onIncrement(this.props.counter)} 
             className="btn btn-secondary sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button>
          </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    } 

    formatCount() {
       const { value }=this.props.counter;
        return value === 0 ? "Zero" :value;
    }
}
 
export default Counter; 

