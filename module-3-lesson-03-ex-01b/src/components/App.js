import React from 'react';

class App extends React.Component {
  render() {
    const students = [
      {
        promo: 'A',
        name: 'Sofía',
        age: 20,
      },
      {
        promo: 'B',
        name: 'María',
        age: 21,
      },
      {
        promo: 'A',
        name: 'Lucía',
        age: 22,
      },
    ];
    const filteredStudents = students.filter((student) => {
      return student.promo === 'A';
    });

    const filteredResult = filteredStudents.map((student, index) => (
      <li key={index}>
        <h2>Nombre: {student.name}</h2>
        <p>Edad: {student.age}</p>
      </li>
    ));
    return (
      <div>
        <h1>Pintar listados con React:</h1>
        <ul>{filteredResult}</ul>
      </div>
    );
  }
}

export default App;
