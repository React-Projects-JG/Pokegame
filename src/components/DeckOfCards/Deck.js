import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Card.css";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

export class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    console.log(deck);
    this.setState({ deck: deck.data });
  }

  handleClick = async () => {
    let id = this.state.deck.deck_id;

    try {
      let cardUrl = `${API_BASE_URL}/${id}/draw`;
      let cardRes = await axios.get(cardUrl);

      if (!cardRes.data.success) {
        throw new Error("No card remaining!");
      }
      console.log(cardRes.data);
      let card = cardRes.data.cards[0];
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  };
  render() {
    const cards = this.state.drawn.map((c) => (
      <Card key={c.id} image={c.image} name={c.name} />
    ));
    return (
      <div>
        <h1>Card Dealer</h1>
        <button className="Deck-btn" onClick={this.handleClick}>
          Get Card
        </button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}

export default Deck;
