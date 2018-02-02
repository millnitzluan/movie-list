import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import ReactPaginate from 'react-paginate';
import { fetchMovies } from '../actions/action_movie_list';

class LoadMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
        pageStart: 1,
        hasMoreItems: true,
        nextHref: null
    };
  }
  
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
        <div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoadMovie);