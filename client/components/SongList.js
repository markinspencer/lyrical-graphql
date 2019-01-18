import React, { Component } from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import query from "../queries/fetchSongs";
import gql from "graphql-tag";

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    const { songs, loading } = this.props.data;

    if (loading) return <div>Loading...</div>;

    return songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i className="material-icons" onClick={() => this.onSongDelete(id)}>
          delete
        </i>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
