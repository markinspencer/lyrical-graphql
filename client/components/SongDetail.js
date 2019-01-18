import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  render() {
    const id = this.props.params.id;
    return (
      <div>
        <h3>Song: {id}</h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
