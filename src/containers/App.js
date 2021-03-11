import React, { Component } from 'react'
import CardList from './../components/CardList';
import SearchBox from './../components/SearchBox';
import Scroll from './../components/Scroll';
import ErrorBoundaries from './ErrorBoundaries';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(result => result.json())
            .then(res => this.setState({robots: res}));
    }

    searchHandler = (e) => {
        this.setState({searchTerm: e.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(r => r.name.toLowerCase().includes(this.state.searchTerm));
        if(!filteredRobots.length) {
            return <h1>Loading ...!</h1>
        } else {
            return (
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchHandler={this.searchHandler} />
                <Scroll>
                    <ErrorBoundaries>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundaries>
                </Scroll>
            </div>
            );
        }
    }
}

export default App;