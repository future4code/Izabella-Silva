import React from 'react';
import axios from 'axios';

export default class App extends React.Component{

  state = {
    missions: []
  }

  componentDidMount(){
    this.getMissions();
  }

  getMissions = () => {
    axios
    .get("https://api.spacexdata.com/v3/missions")
    .then((res) => {
      console.log(res.data)
      this.setState({missions: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render(){
    const missionList = this.state.missions.map((mission) => {
      return (
        <div key={mission.mission_id}>
          <p>Nome: {mission.mission_name}</p>
          <p>Fabricantes: {mission.manufacturers.map((manufactur) => <p>{manufactur}</p> )}</p>
          <a href={mission.twitter}>twitter</a>
          <a href={mission.website}>site</a>
          <a href={mission.wikipedia}>Wikipedia</a>

          <hr/>
        </div>
      );
    })

    return(
      <div>
        <h2>Missões SpaceX</h2>
        {missionList}
      </div>
    );
  }
}