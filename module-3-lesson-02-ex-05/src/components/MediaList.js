import React from 'react';
import MediaCard from './MediaCard';
import image1 from '../images/Rajesh.jpg';
import image2 from '../images/Wisla.jpg';
import image3 from '../images/besos.gif';

class MediaList extends React.Component {
  render() {
    return (
      <ul className="section-cats_list">
        <li>
          <MediaCard
            name="Rajesh Patel"
            date="February 2020"
            image={image1}
            text="Testing if it works props exercise"
            likes={48}
            heart={false}
          />
        </li>
        <li>
          <MediaCard
            name="Wisla"
            date="April 2010"
            image={image2}
            text="My favorite dog"
            likes={727}
            heart={true}
          />
        </li>
        <li>
          <MediaCard
            name="Osito"
            date="17 de Febrero de 2021"
            image={image3}
            text="Besos gordos para todas!!!!"
            likes={977}
            heart={true}
          />
        </li>
      </ul>
    );
  }
}

export default MediaList;
