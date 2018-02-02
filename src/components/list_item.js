import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Table, Modal, Popover, Tooltip, Button, OverlayTrigger, Glyphicon } from 'react-bootstrap';
import { fetchMovieDetail } from '../actions/action_movie_detail';


class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      release_date: props.release_date,
      vote_average: props.vote_average,
      vote_count: props.vote_count,
      poster_path: props.poster_path,
      overview: props.overview,
      loadingDetail: false,
      show: false,
    };

    this.onClick = this.onClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      title: nextProps.title,
      release_date: nextProps.release_date,
      vote_average: nextProps.vote_average,
      vote_count: nextProps.vote_count,
      poster_path: nextProps.poster_path,
      overview: nextProps.overview,
    });
  }
  
  handleClose() {
    this.setState({ show: false });
  }

  componentDidMount() {
    this.props.fetchMovieDetail(this.state.id);
  }

  onClick() {
    this.setState({ show: true });
  }

  renderModal(data) {
    if(data) {
      const adult = <p>{ data.adult ? 'Yes' : 'No' }</p>;
      const overview = <p>{data.overview}</p>
      const originalLanguage = <p>{data.original_language}</p>
      console.log(data);
      const posterPath = `https://image.tmdb.org/t/p/w500${data.poster_path}`
      return (
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><b>{ data.title } {data.tagline}</b></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Overview:</label>
            {overview}

            <label>Adult:</label>
            {adult}

            {originalLanguage}
            <img id="posterModal" src={posterPath}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  

  render() {
    const state = this.state;

    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
        <tr key={state.id} onClick={this.onClick}>
          <td> {state.title} </td>
          <td> {state.release_date} </td>
          <td> {state.vote_average}/10 </td>
          <td> {state.vote_count} </td>
          <td> <img id="poster" src={state.poster_path}/> </td>
          <td>
            { this.state.show
                ? this.renderModal(this.props.movieDetail.find(function(obj) { 
                  if(obj.id === state.id) return obj.id === state.id }))
                : <div> </div>
            }
          </td>
        </tr>
    );
  }
}

function mapStateToProps(state) {
  return { 
    movieDetail: state.movieDetail
  };
}

export default connect(mapStateToProps, { fetchMovieDetail })(ListItem);
