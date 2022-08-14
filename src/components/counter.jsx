import React, { Component } from 'react';

class Counter extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
            return (               
                <div>
                    <span style={this.setBgColor()} className="m-2">{this.counteParser()}</span>
                    <button 
                        onClick={() => {this.props.onIncrement(this.props.counter)}} 
                        //I CALL THE onINCREMENT HANDLER OF THE PARENT COMPONENT 
                        //CUZ IT CONTAINS THE LIST OF COUNTERS " {id: , value: } " IN THE STATE
                        // SO I HAVE TO RESET THE VALUE OF THE OBJECT REPRESENTING THE COUNTER USING setState 
                        // in the counters component
                        className="btn btn-secondary btn-sm">
                        Increment</button>
                    <button
                        onClick={() => {this.props.onDelete(this.props.counter.id)}} 
                        //I CALL THE onDELETE HANDLER OF THE PARENT COMPONENT 
                        //CUZ IT CONTAINS THE LIST OF COUNTERS SO THIS COUNTER HAS TO BE DELETED FROM THAT LIST
                        className="btn btn-danger btn-sm m-2">
                        Delete</button>      
                </div>);
    }

    setBgColor() {
        let styles = {
            color: "black",
            fontSize: 25,
            borderRadius: 12,
        };
        this.props.counter.value === 0 ? styles.backgroundColor = "orange" : styles.backgroundColor = "cyan";
        return styles;
    }

    counteParser() {
        const value = this.props.counter.value;
        return value === 0 ? "Zero" : value;
    }


}

export default Counter;