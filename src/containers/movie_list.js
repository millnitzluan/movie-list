import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Table, Popover, Tooltip, Glyphicon } from 'react-bootstrap';
import { fetchMovieDetail } from '../actions/action_movie_detail';
import ListItem from '../components/list_item';

class MovieList extends Component {
  renderMovie(movieData) {
    return movieData.results.map(data =>
      (
        <ListItem id={data.id} onClick={this.handleShow}
          title={data.title} release_date={data.release_date} 
          vote_average={data.vote_average} vote_count={data.vote_count}
          poster_path={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          overview={data.overview}
        />
      )
    );
  }

  render () {
    return (
      <div>
        <div>
          <Table responsive={true} hover={true} > 
            <thead className="header" id="myHeader">
              <tr id="tableHeader">
                <th> <Glyphicon glyph="film"/> Title </th>
                <th> <Glyphicon glyph="calendar"/> Release Date </th>
                <th> <Glyphicon glyph="star"/> Vote Average </th>
                <th> <Glyphicon glyph="star-empty"/> Vote Count </th>
                <th><Glyphicon glyph="picture"/> Poster </th>
              </tr>
            </thead>
            <tbody>
              { this.props.movie.map(this.renderMovie.bind(this)) }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    movie: state.movie,
    movieDetail: state.movieDetail
  };
}

export default connect(mapStateToProps, { fetchMovieDetail })(MovieList);