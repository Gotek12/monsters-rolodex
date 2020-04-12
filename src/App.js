import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component';

//class component (statefull component)
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // because we must bind -> set that this in function is this from constructor itp or el from class
    //but we can use arrow function and we can't do it 
    // this.handleChange = this.handleChange.bind(this);
  }

  //download data from server/rest api
  componentDidMount(){
    //fetch return promise
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) //here wehave json with data
    .then(users => this.setState({monsters: users})); //next from that json we read users
  }

  // handleChange(e){
  //   this.setState({ searchField: e.target.value});
  // }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }

  // render methon is build in react component, and give us funcionality to create components, and manage livecycle of components
  render(){
    const { monsters, searchField } = this.state; //destructuring concept // =? const monsters = yhis.state.monsters, const searchField = this.state.searchFiels;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* <input 
          type = "search" 
          placeholder='search monsters' 
          //defining funcion not running, we use anonymous function
          onChange={e => this.setState({ searchField: e.target.value})} //syntetic event
        /> */}
        <SearchBox
          placeholder = 'search monsters' 
          // handleChange = {e => this.setState({ searchField: e.target.value})}
          handleChange = {this.handleChange}
        />
        {/* <CardList monsters = {this.state.monsters}/> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
 
}

export default App;
