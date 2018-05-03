import React from 'react';
import ReactDOM from 'react-dom';

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


    // deleteUser = async () => {
    //             fetch(`http://localhost:3000/posts/`, {
    //                 method: 'DELETE'
    //             })
    //             .then(res => res)
    //             .catch(err => err);
    //     };


    handleDelete = (e) => {
        //         console.log(e.currentTarget.parentElement.innerText);
        let toMove = e.currentTarget.parentElement.innerText;
        let users = this.state.name;
        let newArr = [];
        users.filter(person => {
            if (person+' Delete' === toMove) {return person;}
            newArr.push(person);
        });

        // console.log(newArr)
        this.setState({
            name: newArr
        })


    };

    render() {
        // let listOfUsers = this.state.name;
        // {listOfUsers
        //     ? listOfUsers = this.state.name.map((user, i) => {
        //         return <li className='users' key={i}>{user}<button>Delete</button></li>
        // })
        //     : <h2>Loading...</h2>}
     return (
         <div className='main'>
             <div className='users-list'>{this.state.name
                 ? this.state.name.map((user, i) => {
                     return <div key={i}>{user} <button onClick={this.handleDelete}>Delete</button></div>})
                 : <span>Loading</span>
             }</div>
         </div>
     )
    }
}
export default Users;
