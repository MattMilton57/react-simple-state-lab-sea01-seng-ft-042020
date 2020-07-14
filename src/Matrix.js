import React, { Component } from 'react';
import Cell from './Cell'


class Matrix extends Component {

  // constructor(props) {
  //   super(props);
  //   Matrix.defaultProps = {values:props.backup}
//  }

  // constructor(props) {}
  // static defaultProps = {
  //   values: backup}

  componentDidMount(){
    const aRealThing =(this.props.backup)
    console.log(aRealThing)
  }

 
  
  genRow = (vals) =>{ 
    return vals.map(val => <div className="cell"><Cell value={'#fff'}/></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        
        {this.genMatrix()}
      </div>
    )
    
  }
  
}

export default Matrix

Matrix.defaultProps = {
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]
}