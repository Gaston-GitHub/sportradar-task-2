import React from 'react';
import axios from 'axios';

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
    };
  }

  async getLastFiveMatches() {
    const URL = 'http://localhost:4000/matches';
    const res = await axios.get(URL);
    console.log(res.data);
    this.setState({ matches: res.data });
  }

  componentDidMount() {
    this.getLastFiveMatches();
  }

  render() {
    return (
      <div>
        <h2>Last five matches information</h2>
        <div>
          {this.state.matches.map((match) => {
            return (
              <div key={match._id}>
                <h4>{match.time.date}</h4>
                <h4>{match.time.time}</h4>
                <h4>{match.teams.away.name}</h4>
                <h4>{match.teams.home.name}</h4>
                <h4>{match.result.away}</h4>
                <h4>{match.result.home}</h4>
                <h4>{match.comment}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Matches;
