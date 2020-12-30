import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
//import Pokegame from "./components/Pokegame";
//import Pokedex from "./components/Pokegame/Pokedex";
//import RollDice from "./components/DiceGame/RollDice";
//import TodoList from "./components/TodoList/TodoList";
//import Game from "./components/Yahtzee/Game";
//import Deck from "./components/DeckOfCards/Deck";
//import JokeList from "./components/DadJokes/JokeList";
import TodoApp from "./components/TodoHooks/TodoApp";

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
