import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    //Set default state
    this.state = {
      userList: [
        {
          name: 'Yedda Marie',
          age: 21,
          occupation: 'Gardener'
        },
        {
          name: 'Carmela',
          age: 21,
          occupation: 'Sky Diver'
        }
      ],
      user: {
        name:'',
        age:'',
        occupation:''
      }
    }
    //Add Action bindings
  }

  //Add event handlers
  handlerChangeInfo= e =>{

    console.log('EVENT');

    const{name, value} = e.target;

    this.setState((prevstate) => ({
      user: {
        ...prevstate.user,
        [name]: value
      }
    }));
  }

  handleAddUser = e => {

    console.log('PASSED USER');

    let user = this.state.user;
    let userList = [...this.state.userList];

    userList.push(user);

    console.log(this.state.userList);

    this.setState({userList : userList});

    e.preventDefault();
  }

  deleteUser = index =>{
    let userList = [...this.state.userList];
    userList.splice(index, 1);
    this.setState({userList})
  }

  render() {
    let userList = this.state.userList;
    let user = this.state.user;

    console.log('USER');
    console.log(user)

    console.log('USERS');
    console.log(userList);

    return (
      <div className="App">

      <div className = 'form-panel'>
        <form>
          Name: <br/> <input type = 'text' name = 'name' placeholder = 'Name' 
          onChange = {this.handlerChangeInfo} /> <br/>
          Age: <br/> <input type = 'text' name = 'age' placeholder = 'Age' 
          onChange = {this.handlerChangeInfo} /> <br/>
          Occupation: <br/> <input type = 'text' name = 'occupation' placeholder = 'Occupation'
          onChange = {this.handlerChangeInfo}  /> <br/>
          <br/>
          <button type = 'button' onClick = {this.handleAddUser}>Add User</button>
          <br />
          <br />
        </form>
      </div>

        <table className = 'table-panel'>
          <thead></thead>
          <tbody>
            <tr>
              <th className = 'user-table-cell'>NAME</th>
              <th className = 'user-table-cell'>AGE</th>
              <th className = 'user-table-cell'>OCCUPATION</th>
              <th className = 'user-table-cell'></th>
            </tr>
            {//iterate (.map)
              userList.map((user, index) =>{ 
                return(
                  <tr className = 'user-table-row'>
                  <td className = 'user-table-cell'>{user.name}</td>
                  <td className = 'user-table-cell'>{user.age}</td>
                  <td className = 'user-table-cell'>{user.occupation}</td>
                  <td className = 'user-table-cell'>
                  <button type = 'button' onClick = {() =>this.deleteUser(index)}>DELETE USER</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
