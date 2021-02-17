import React from 'react';
import '../App.css';
class MediaCard extends React.Component {
  render() {
    let heartElement;
    if (this.props.heart === true) {
      heartElement = <i className="fas fa-heart"></i>;
    } else {
      heartElement = <i className="far fa-heart"></i>;
    }

    return (
      <article className="App-article">
        <section className="App-section1">
          <div className="App-title">
            <h2 className="App-name">{this.props.name}</h2>
            <h3 className="App-date">{this.props.date}</h3>
          </div>
        </section>
        <section>
          <img src={this.props.image} className="App-photo" alt="Portrait" />
          <p>{this.props.text}</p>
        </section>
        <section className="App-footer">
          <span className="App-likes">{this.props.likes}</span>
          {heartElement}
        </section>
      </article>
    );
  }
}

export default MediaCard;
