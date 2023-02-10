import React, { Component } from "react";

import { SliderButton } from "../SliderButton";
import { Slider } from "../Slider";
import { getHotels } from "../../Services/HotelsCards/SearchAPI";

import "./Homes.css";

export class HomesClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
    const cards = await getHotels();
    this.setState({ cards });
  }

  render() {
    const { cards } = this.state;
    return (
      <section className="homes">
        <h2 className="h2-text">Homes guests loves</h2>

        <div className="add">
          <SliderButton className={"s-button-next"} />
          <SliderButton className={"s-button-prev"} />
          <Slider className="homes__examples" data={cards} />
        </div>
      </section>
    );
  }
}
