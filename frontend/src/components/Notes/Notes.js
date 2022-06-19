import React from 'react';
import './Notes.css';

class Notes extends React.Component {
  render() {
    return (
      <div>
        <p>Moje notatki: </p>

        <div className='note'>
          <p>Wynieść śmieci</p>
          <div className='description'>
            odpady segregowane
          </div>
          <button>edytuj</button>
          <button className='delete'>usuń</button>
        </div>

        <div className='note'>
          <p>powycierać kurze</p>
          <div className='description'>
            sypialnia, salon
          </div>
          <button>edytuj</button>
          <button className='delete'>usuń</button>
        </div>

      </div>
    );
  }
}

export default Notes;