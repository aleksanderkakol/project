import React from 'react';
import ReactDOM from 'react-dom';

export class Delete extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
     return (
         <button onClick={this.handleDelete} className='btn'>Delete</button>
     )
    }
}
export default Delete;