import React from 'react';
import axios from 'axios';

class Tournaments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: [],
    };
  }

  async getAllTournaments() {
    const URL = 'http://localhost:4000/tournaments';
    const res = await axios.get(URL);
    console.log(res.data.doc[0].data.tournaments);
    this.setState({ tournaments: res.data.doc[0].data.tournaments });
  }

  componentDidMount() {
    this.getAllTournaments();
  }

  render() {
    return (
      <div>
        <h2>Tournaments</h2>
        <div>
          {this.state.tournaments.map((tournament) => {
            return (
              <div key={tournament._id}>
                <h4>{tournament.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tournaments;
