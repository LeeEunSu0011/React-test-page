import './App.css';
import Customer from './components/Customer';
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const customer = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : 'cccc',
    'birthday' : '99 99 99',
    'gender' : '男',
    'job' : 'programer'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : 'dddd',
    'birthday' : '88 88 99',
    'gender' : '女',
    'job' : 'programer'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : 'aaaa',
    'birthday' : '77 99 99',
    'gender' : '男',
    'job' : 'programer'
  }
]

class App extends Component {
  render(){
    return(
      <div>
        {
          customer.map(c => {
            return (
              <Customer
                key = {c.id}
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
