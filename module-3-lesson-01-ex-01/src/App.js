import React, { Component } from 'react';
import Header from './Header';
import './App.css';

function renderP() {
  return <p>Lorem ipsum</p>;
}

const main = (
  <section className="App-p+func+span">
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
    {renderP()}
    <span>Leer más...</span>
  </section>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <article className="App-article">
          <Header />
          {main}
          {renderP()}
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
}

export default App;
