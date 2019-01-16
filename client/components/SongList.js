import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div> SongList </div>;
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
