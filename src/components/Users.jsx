import React from 'react';
import ReactDOM from 'react-dom';
import Delete from './Delete.jsx';

export class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: undefined
        };
    }
    componentWillMount = async () => {
        const url = await fetch(`http://localhost:3000/posts`);
        const users = url.json();
        users.then((res) => {
            let arr = [];
            res.forEach((e) => {
               //  console.log(e.name);
                return arr.push(e.name)
            });
            // console.log(arr)
            this.setState ({
                name: arr
            });
        });
        users.catch((err) => {
            console.log(err)
        });
    };



    // handleDelete = (index, i) => {
        // const url = fetch(`http://localhost:3000/posts/${index}`, {
        //     method: 'DELETE'
        // });
        // this.setState(state => {
        //     state.name = name;
        //     return state
        // })
       // console.log()
       // this.setState({
            // name: name
       // })

    //};

    render() {
        let listOfUsers = this.state.name;
        {listOfUsers
            ? listOfUsers = this.state.name.map((user, i) => {
                return <li className='users' key={i}>{user}<button onClick={this.handleDelete}>Delete</button></li>
        })
            : <h2>Loading...</h2>}
     return (
         <div className='main'>
             <ul className='users-list'>{listOfUsers}</ul>
         </div>
     )
    }
}
export default Users;
