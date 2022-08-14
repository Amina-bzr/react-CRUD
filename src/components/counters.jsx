import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        total:0,
        counters: [
            {id: 1, value:0},
            {id: 2, value:0},
            {id: 3, value:0},
            {id: 4, value:0}
        ],
      } 

    HandleDelete = (counterID)=> {
        let newCounters = this.state.counters.filter(c => c.id !== counterID);
        this.setState(
            {counters: newCounters}
        )
      }

      HandleIncrement = (counter)=> {
        let counters = this.state.counters;
        counters[counters.indexOf(counter)].value++;
        this.setState({counters:counters});
      }

      HandleReset = () => {
        let counters = this.state.counters.map((counter)=> 
            {counter.value=0; 
                return counter;} )
        console.log(counters);
        this.setState({counters:counters})
      }

      
      
    render() { 
        return (<div>
            <button className="btn btn-secondary btn-sm" onClick={()=>this.HandleReset()}>Reset</button>
            {this.state.counters.map((counter) => {
                return <Counter key={counter.id} counter={counter} onDelete={this.HandleDelete} onIncrement={this.HandleIncrement} />
            })}
        </div>);
    }
}
 
export default Counters;