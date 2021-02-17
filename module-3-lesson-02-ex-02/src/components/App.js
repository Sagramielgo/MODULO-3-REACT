import React from 'react';
import MediaCard from './MediaCard';
import image from '../Rajesh.jpg';

class App extends React.Component {
  render() {
    return (
      <section>
        <MediaCard
          name="Rajesh Patel"
          date="February 2020"
          image={image}
          text="Testing if it works props exercise"
          likes={48}
          heart={false}
        />
      </section>
    );
  }
}

export default App;
