import React, { Component } from "react";

class LyricList extends Component {
  constructor(props) {
    super(props);
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => (
      <li key={id} className="collection-item">
        {content}
      </li>
    ));
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
