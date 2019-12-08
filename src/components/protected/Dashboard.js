import React, { Component } from 'react';
import { base, firebaseAuth } from '../../config/constants';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { feedbacks: [] };
  }

  componentDidMount() {
    base.bindToState(`feedbacks`, {
      context: this,
      state: 'feedbacks',
      asArray: true
    });
  }

  render() {
    const columns = [{
      Header: 'Email',
      accessor: 'email' // String-based value accessors!
    }, {
      Header: 'Game',
      accessor: 'game'
    }, {
      Header: 'Comment', // Required because our accessor is not a string
      accessor: 'comment'
    }, {
      Header: 'Stars', // Custom header components!
      accessor: 'stars'
    },
    {
      Header: 'Date Time',
      accessor: 'dateTime'
    }]

    return <ReactTable
      data={this.state.feedbacks}
      columns={columns}
    />
  }
}