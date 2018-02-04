import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Table, Modal, Popover, Tooltip, Button, OverlayTrigger, Glyphicon } from 'react-bootstrap';
import { fetchMovieDetail } from '../actions/action_movie_detail';


class DetailModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      show: false,
    };

    this.onClick = this.onClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.renderCompany = this.renderCompany.bind(this);
    this.renderCountry = this.renderCountry.bind(this);
    this.renderGenre = this.renderGenre.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      show: nextProps.show
    });
  }

  componentDidMount() {
    this.props.fetchMovieDetail(this.state.id);
  }

  handleClose() {
    this.setState({ show: false });
  }

  onClick() {
    this.setState({ show: true });
  }

  renderModal(data) {
    console.log(data);
    const titleTagline = <b>{ data.title } {data.tagline}</b>;
    const adult = <p>{ data.adult ? 'Yes' : 'No' }</p>;
    const overview = <p>{data.overview}</p>;
    const originalLanguage = <p>{data.original_language}</p>;
    const productionCompany = <p>{data.production_companies}</p>;
    const companiesList = this.renderCompany(data.production_companies);
    const countriesList = this.renderCountry(data.production_countries);
    const genresList = this.renderGenre(data.genres);
    const posterPath = `https://image.tmdb.org/t/p/w500${data.poster_path}`;

    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titleTagline}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Overview:</label>
          {overview}

          <label>Adult:</label>
          {adult}

          <label>Genres:</label>
          {genresList}

          <label>Original Language:</label>
          {originalLanguage}

          <label>Production Companies:</label>
          <ul>
            {companiesList}
          </ul>

          <label>Production Countries:</label>
          <ul>
            {countriesList}
          </ul>

          <label>Poster:</label>
          <img id="posterModal" src={posterPath}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    return <Modal show={this.state.show} onHide={this.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>teste</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={this.handleClose}>Close</Button>
    </Modal.Footer>
  </Modal>
  }
}

function mapStateToProps(state) {
  return { 
    movieDetail: state.movieDetail
  };
}

export default connect(mapStateToProps, { fetchMovieDetail })(DetailModal);