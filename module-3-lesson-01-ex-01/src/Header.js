import React from 'react';
import image from './Rajesh.jpg';

class Header extends React.Component {
  render() {
    return (
      <section className="App-section1">
        <img src={image} className="App-photo" alt="Rajesh" />
        <div className="App-title">
          <h2 className="App-name">Alex Guerrero</h2>
          <h3 className="App-date">Lunes 26 de junio de 2017</h3>
        </div>
      </section>
    );
  }
}

export default Header;
