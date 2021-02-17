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
      <div className="App">
        <article className="App-article">
          <section className="App-section1">
            <div className="App-title">
              <h2 className="App-name">{this.props.name}</h2>
              <h3 className="App-date">{this.props.date}</h3>
            </div>
          </section>
          <section>
            <img src={this.props.image} className="App-photo" alt="Rajesh" />
            <p>{this.props.text}</p>
          </section>
          <section className="App-footer">
            <span className="App-likes">{this.props.likes}</span>
            {heartElement}
          </section>
        </article>
      </div>
    );
  }
}

export default MediaCard;

/* 

<div className="App">
      <article className="App-article">
        <section className="App-section1">
          <img src={image} className="App-photo" alt="photo" />
          <div className="App-title">
            <h2 className="App-name">Alex Guerrero</h2>
            <h3 className="App-date">Lunes 26 de junio de 2017</h3>
          </div>
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam iste sapiente molestiae dicta.
            Excepturi voluptas facere eius labore nostrum quaerat, soluta neque saepe nesciunt illo velit doloremque
            fugit itaque! Dolores voluptatem porro id voluptatum laborum cupiditate, excepturi iste molestiae soluta
            incidunt sit saepe quos adipisci non dolor explicabo sunt possimus. Qui dolore unde placeat. Maxime quod
            adipisci eveniet expedita? A odio explicabo eos consectetur quo, sapiente officiis alias, quae tempora
            temporibus quis voluptatem ducimus blanditiis tenetur enim! Cupiditate sed eum at nesciunt est consequuntur
            aspernatur. Ipsum, similique pariatur! Non? Nihil non sapiente suscipit, cumque magni ipsum quod voluptates
            in assumenda voluptatem praesentium dolorem soluta eveniet commodi sed totam minima ullam quos ipsa corporis
            dolores debitis illo labore a? Vel.
          </p>
          <span>Leer más...</span>
        </section>
        <section className="App-section3">
          <span>37</span>
          <span>
            <i className="fas fa-heart"></i>
          </span>
        </section>
      </article>
    </div>
  );
}
 */
