import React, { Component } from 'react';

class Cell extends Component {

    
        
            state={
                color:this.props.value
            }

            handleclick = (e) => {
           
                this.setState({
                    color:'#333'
                })
              }       
        
    
    render() {
        return(
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={(e) => this.handleclick(e)} >
                    hat
            </div>
        )
    }

}
export default Cell


// onClick={(e) => (console.log("im a box"))}
// {{backgroundColor: '#008000'}} 