import React, { Component } from 'react'
import Stars from 'simple-rating-stars';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "", stars: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('A comment was submitted: ' + this.state.comment + ' Stars: ' + this.state.stars);
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
          <select name="Icecream Flavours">
            <option value="double chocolate">Double Chocolate</option>
            <option value="vanilla">Vanilla</option>
            <option value="strawberry">Strawberry</option>
            <option value="caramel">Caramel</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}