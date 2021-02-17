import React from 'react';

class MediaCard extends React.Component {
  render() {
    let heartElement;
    if (this.props.heart === true) {
      heartElement = <i className="fas fa-heart"></i>;
    } else {
      heartElement = <i className="far fa-heart"></i>;
    }

    return (
      <section className="App-section1">
        <h2 className="App-name">{this.props.name}</h2>
        <h3 className="App-date">{this.props.date}</h3>
        <img src={this.props.image} className="App-photo" alt="Rajesh" />
        <p>{this.props.text}</p>
        <span>{this.props.likes}</span>
        {heartElement}
      </section>
    );
  }
}

export default MediaCard;
