import React, { Component } from 'react';
import { base, firebaseAuth } from '../../config/constants';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "", stars: 0, games: [], game: "", feedbacks: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    base.bindToState(`games`, {
      context: this,
      state: 'games',
      asArray: true
    });
    base.bindToState(`feedbacks`, {
      context: this,
      state: 'feedbacks',
      asArray: true
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    let now = Date.now()
    let userFeedBackForGameInPastTenMin = this.state.feedbacks.filter(feedback => {
      return feedback.email === firebaseAuth().currentUser.email &&
        feedback.game === this.state.game &&
        (now - feedback.timeStamp) < 6000000  // 600000 miliseconds = 10minutes
    })

    if (userFeedBackForGameInPastTenMin.length === 0) {
      base.push('feedbacks', {
        data: {
          email: firebaseAuth().currentUser.email,
          comment: this.state.comment,
          stars: this.state.stars,
          game: this.state.game,
          timeStamp: Date.now()
        }
      })
    } else {
      alert("Only one feedback per game session!")
    }
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
            {this.state.games.map((game, i) => <option key={i} name="game" value={game.gameName}>{game.gameName}</option>)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}