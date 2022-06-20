import React, {useState} from 'react';

function NewNote(props) {

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const changeTitleHandler = e => {
    const value = e.target.value;
    setTitle(value);
  }

  const changeDescHandler = e => {
    const value = e.target.value;
    setDesc(value);
  }

  const addNote = () => {
    const note = {
      title: title,
      body: desc
    };
    props.onAdd(note);

    setTitle('');
    setDesc('');
    setShowForm(false);
  }
  return (
    showForm? (
    <div className='note'>
      <label>Tytuł:</label>
      <input type='text' 
        value = {title} 
        onChange = {changeTitleHandler} />

      <label>Opis:</label>
      <input type='text' 
      value = {desc} 
      onChange = {changeDescHandler}/>

      <button onClick = {() => addNote()}>Dodaj notatkę</button>
    </div>
    ) : (
      <button onClick={() => setShowForm(true)}>Nowa notatka</button>
    )
  );
}

export default NewNote;