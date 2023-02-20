import React,{useState} from 'react'
import Header from './Header';
import Footer from './Footer'
import Note from './Note';
import notes from '../notes';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes(prevNote => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id){
    setNotes((prevNote)=>{
      return prevNote.filter((noteItems,index)=>{
          return index!==id;
      });
    });
  }

  return <div>
    <Header />
    <CreateArea
      onAdd={addNote}
    />
    {notes.map((items, index) => {
      return <Note
        key={index}
        id={index}
        title={items.title}
        content={items.content}
        onDelete={deleteNote}
      />
    })}
    <Footer />
  </div>
}

export default App