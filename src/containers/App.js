// reference back to video 212 of course for support on STATE

import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
// import Scroll from '../components/Scroll';

// create state in order to interact between "robots" and "SearchBox"; have to pass between the parent (App.js)
// const state = {
//     robots: users,
//     searchfield: ''
// }

// use class extends compontent constructor in order to build the "state" 
// since App owns "robots" it can change "robots" before being passed to "CardList"
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // onSearchChange is just a madeup function prompt an action from SearchBox
    // event is prompting the change (e.g., DOM Manipulation sections)
    // IMPORTANT - Initially had "filteredRobots" in onSearchChange; Moved to render to impact page rendering

    onSearchChange = (event) => {
        // have to add in below this.setState to change the "searchfield" from blank to the search event value
        // can't add into searchfield because that occurs before these events within the sequence of code
        this.setState({ searchfield: event.target.value })
    }

    // render the two core compontents 
    // when filteredRobots passes to CardList it'll be a prop (can't change), but the App has changed it by that point
    // searchChange (from the class App) is the onSearchChange event we created above
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className="f2">Current Porfolio Skills</h1>
                <SearchBox searchChange={this.onSearchChange} />
                {/* <Scroll> */}
                <CardList robots={filteredRobots} />
                {/* </Scroll> */}
            </div >
        );
    }
}

export default App;