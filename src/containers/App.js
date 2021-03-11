import React, { Component,useState,useEffect } from 'react'
import CardList from './../components/CardList';
import SearchBox from './../components/SearchBox';
import Scroll from './../components/Scroll';
import ErrorBoundaries from './ErrorBoundaries';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchHandler = (e) => {
      setSearchTerm(e.target.value);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((result) => result.json())
          .then((res) => setRobots(res ));
    }, []);

    const filteredRobots = robots.filter((r) =>
      r.name.toLowerCase().includes(searchTerm)
    );
    if (!filteredRobots.length) {
      return <h1>Loading ...!</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox searchHandler={searchHandler} />
          <Scroll>
            <ErrorBoundaries>
              <CardList robots={filteredRobots} />
            </ErrorBoundaries>
          </Scroll>
        </div>
      );
    }

}

export default App;