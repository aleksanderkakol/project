import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
require('./scss/main.scss');
import Users from './components/Users.jsx';

class App extends React.Component {
   render() {
       return (
               <Users/>
       )
   }
}
document.addEventListener("DOMContentLoaded", function(){
    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    )
});