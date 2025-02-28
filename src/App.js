import './App.scss'
import React, {useState} from 'react'
import Header from './components/Header'
import CardList from './components/CardList'
import CardForm from './components/CardForm';


function App() {
  const [activeCard,setActiveCard] = useState(null);

  function changeActiveCard(id) {
    setActiveCard(id);
  }
  
  const [cardContent, setCardContent] = useState([{id:1, title: 'First card', content: 'Testing 123'},{ id:2, title: 'Second card',content: 'Testing 456' }]);
  function addCard(newTitle, newContent) {
    const newCard = {
      id: cardContent.length + 1,
      title: newTitle,
      content: newContent
    }
    setCardContent([...cardContent, newCard]);
  }
  

    

  return (
    
    <>
      <Header logo="BrainStation"/>
      <CardForm addCard={addCard}/>
      <CardList cardContent={cardContent} activeCard={activeCard} changeActiveCard={changeActiveCard}/>
    </>
  );
}

export default App;
