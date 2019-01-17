import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongList extends Component {
  renderSongs() {
    const { songs, loading } = this.props.data;

    if (loading) return <div>Loading...</div>;

    return songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  }

  render() {
    return <ul className="collection">{this.renderSongs()}</ul>;
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
