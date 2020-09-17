import React from "react";
import "./App.css";
//import Pokegame from "./components/Pokegame";
//import Pokedex from "./components/Pokegame/Pokedex";
// import RollDice from "./components/DiceGame/RollDice";
//import TodoList from "./components/TodoList/TodoList";
//import Game from "./components/Yahtzee/Game";
// import Deck from "./components/DeckOfCards/Deck";
import JokeList from "./components/DadJokes/JokeList";

function App() {
  return (
    <div className="App">
      <JokeList />
    </div>
  );
}

export default App;
