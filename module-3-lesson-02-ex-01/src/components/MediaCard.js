import React from 'react';
import image from '../Rajesh.jpg';
import '../App.css';

const header = (
  <section className="App-section1">
    <img src={image} className="App-photo" alt="Rajesh" />
    <div className="App-title">
      <h2 className="App-name">Alex Guerrero</h2>
      <h3 className="App-date">Lunes 26 de junio de 2017</h3>
    </div>
  </section>
);

const main = (
  <section>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam
      iste sapiente molestiae dicta. Excepturi voluptas facere eius labore
      nostrum quaerat, soluta neque saepe nesciunt illo velit doloremque fugit
      itaque! Dolores voluptatem porro id voluptatum laborum cupiditate,
      excepturi iste molestiae soluta incidunt sit saepe quos adipisci non dolor
      explicabo sunt possimus. Qui dolore unde placeat. Maxime quod adipisci
      eveniet expedita? A odio explicabo eos consectetur quo, sapiente officiis
      alias, quae tempora temporibus quis voluptatem ducimus blanditiis tenetur
      enim! Cupiditate sed eum at nesciunt est consequuntur aspernatur. Ipsum,
      similique pariatur! Non? Nihil non sapiente suscipit, cumque magni ipsum
      quod voluptates in assumenda voluptatem praesentium dolorem soluta eveniet
      commodi sed totam minima ullam quos ipsa corporis dolores debitis illo
      labore a? Vel.
    </p>
    <span>Leer más...</span>
  </section>
);

const footer = (
  <section className="App-section3">
    <span>37</span>
    <span>
      <i className="fas fa-heart"></i>
    </span>
  </section>
);

class MediaCard extends React.Component {
  render() {
    return (
      <div className="App">
        <article className="App-article">
          {header}
          {main}
          {footer}
        </article>
      </div>
    );
  }
}

export default MediaCard;
