import React, { Component } from 'react';
import { base } from '../../config/constants';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "", stars: 0, games: [], game: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    base.syncState(`games`, {
      context: this,
      state: 'games',
      asArray: true
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('A comment was submitted: ' + this.state.comment + ' Stars: ' + this.state.stars + "games: " + this.state.game);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            required />
        </label>
        <br />
        <label>
          Stars:
          <input type="number"
            name="stars"
            value={this.state.stars}
            onChange={this.handleChange}
            min="1"
            max="5"
            required />
        </label>
        <br />
        <label>
          Game:
          <select required name="game" value={this.state.game} onChange={this.handleChange}>
            <option name="game" value="">Please select</option>
            {this.state.games.map((game) => <option name="game" value={game.gameName}>{game.gameName}</option>)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}